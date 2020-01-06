import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './account/account.entity';
import { AccountService } from './account/account.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth.controller';
import { Jwt } from './auth/jwt-strategy/jwt.service';
import { LocalStrategy } from './auth/local/local.service';
import { jwtConstants } from './auth/jwt-strategy/jwt.constants';

@Module({
  imports: [

    JwtModule.register({
      secret: jwtConstants.secret,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AccountService, AuthService, LocalStrategy, Jwt],
  controllers: [AuthController],
})

export class AuthModule {
}
