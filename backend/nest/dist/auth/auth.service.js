"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const ethers_1 = require("ethers");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(data) {
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
    async validateUser(username, password) {
        const user = await this.prisma.user.findUnique({
            where: { username },
        });
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async generateNonce() {
        return Math.floor(Math.random() * 1000000).toString();
    }
    async validateWalletSignature(address, signature, nonce) {
        try {
            const message = `Login with nonce: ${nonce}`;
            const recoveredAddress = ethers_1.ethers.verifyMessage(message, signature);
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
            throw new common_1.UnauthorizedException('Invalid signature');
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid signature');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map