import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../accounts/Account';
import { AccountService } from '../services/AccountService';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Account]),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
    ],
    providers: [AccountService, AuthService],
    controllers: [AuthController]
})
export class AuthModule { }