import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() data: { username: string; email: string; password: string },
  ) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: { username: string; password: string }) {
    const user = await this.authService.validateUser(data.username, data.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('wallet/nonce')
  async getNonce(@Body('address') address: string) {
    const nonce = await this.authService.generateNonce();
    return { nonce };
  }

  @Post('wallet/verify')
  async verifyWallet(
    @Body() data: { address: string; signature: string; nonce: string },
  ) {
    return this.authService.validateWalletSignature(
      data.address,
      data.signature,
      data.nonce,
    );
  }
}
