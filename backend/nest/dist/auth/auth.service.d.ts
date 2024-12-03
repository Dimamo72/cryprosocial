import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(data: {
        username: string;
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    validateUser(username: string, password: string): Promise<{
        id: string;
        username: string;
        email: string | null;
        walletAddress: string | null;
        bio: string | null;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    generateNonce(): Promise<string>;
    validateWalletSignature(address: string, signature: string, nonce: string): Promise<{
        token: string;
    }>;
}
