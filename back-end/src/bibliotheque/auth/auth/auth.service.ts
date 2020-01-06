import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../account/account.entity';
import * as bcrypt from 'bcryptjs';
import { jwtConstants } from './jwt-strategy/jwt.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: AccountService,
    private readonly jwtService: JwtService) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(username);
    if (user && (await this.passwordsAreEqual(user.cpt_mot_de_passe, pass))) {
      const { cpt_mot_de_passe, ...result } = user;
      return result;
    }
    return null;
  }

  public async login(user: User): Promise<any | { status: number }> {
    console.log(user.cpt_pseudo, user.cpt_mot_de_passe);
    return this.validateUser(user.cpt_pseudo, user.cpt_mot_de_passe).then((userData) => {
      if (!userData) {
        return { status: 404 };
      }
      const payload = {  username: user.cpt_pseudo };
      return {
        access_token: this.jwtService.sign(payload),
        status: 200,
      };
    });
  }

  private async passwordsAreEqual(hashedPassword: string, plainPassword: string): Promise<boolean> {
    return plainPassword === hashedPassword;
  }

  public async register(user: User): Promise<any> {
    return this.userService.create(user);
  }
}
