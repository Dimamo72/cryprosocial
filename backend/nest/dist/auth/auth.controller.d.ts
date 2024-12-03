import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(data: {
        username: string;
        email: string;
        password: string;
    }): Promise<{
        token: string;
    }>;
    login(data: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getNonce(address: string): Promise<{
        nonce: string;
    }>;
    verifyWallet(data: {
        address: string;
        signature: string;
        nonce: string;
    }): Promise<{
        token: string;
    }>;
}
