import { Controller, Post, Body } from  '@nestjs/common';
import { AuthService } from  '../services/auth.service';
import { Reader } from '../readers/Reader';
import { Manager } from '../managers/Manager';
import { Account } from '../accounts/Account';

@Controller('auth')
export class AuthController {
    constructor(private  readonly  authService:  AuthService) {}
    @Post('login')
    async login(@Body() user: Account) : Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register_manager')
    async register_manager(@Body() user: Account, manager: Manager): Promise<any> {
      return this.authService.register_manager(user, manager);
    }

    @Post('register_reader')
    async register_reader(@Body() user: Account, reader: Reader): Promise<any> {
      return this.authService.register_reader(user, reader);
    }
}
