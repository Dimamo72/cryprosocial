import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { ethers } from 'ethers';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: { username: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user = await this.prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    const token = this.jwtService.sign({ 
      sub: user.id,
      username: user.username 
    });

    return { token };
  }

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async generateNonce() {
    return Math.floor(Math.random() * 1000000).toString();
  }

  async validateWalletSignature(address: string, signature: string, nonce: string) {
    try {
      const message = `Login with nonce: ${nonce}`;
      const recoveredAddress = ethers.verifyMessage(message, signature);
      
      if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
        let user = await this.prisma.user.findUnique({
          where: { walletAddress: address.toLowerCase() },
        });

        if (!user) {
          user = await this.prisma.user.create({
            data: {
              username: `wallet_${address.slice(2, 8)}`,
              walletAddress: address.toLowerCase(),
            },
          });
        }

        const token = this.jwtService.sign({ 
          sub: user.id,
          username: user.username,
          walletAddress: user.walletAddress
        });

        return { token };
      }
      throw new UnauthorizedException('Invalid signature');
    } catch (error) {
      throw new UnauthorizedException('Invalid signature');
    }
  }
}
