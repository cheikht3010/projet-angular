import { Injectable } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { AccountService } from  './AccountService';
import { Account } from  '../accounts/Account';
import { Manager } from '../managers/Manager';
import { Reader } from '../readers/Reader';
import { ManagerController } from '../controllers/ManagerController';
import { ManagerService } from './ManagerService';
import { ReaderService } from './ReaderService';

@Injectable()
export class AuthService {
    constructor(
        private readonly accountService: AccountService,
        private readonly managerService: ManagerService,
        private readonly readerService: ReaderService,
        private readonly jwtService: JwtService
    ) { }

    private async validate(userData: Account): Promise<Account> {
        return await this.accountService.findByPseudo(userData.cpt_pseudo);
    }

    public async login(user: Account): Promise< any | { status: number }>{
        return this.validate(user).then((userData)=>{
          if(!userData){
            return { status: 404 };
          }
          let payload = `${userData.cpt_pseudo}`;
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };

        });
    }

    public async register_manager(user: Account, manager: Manager): Promise<any>{
      let cpt = this.accountService.create(user)
      this.managerService.create(manager)
      return cpt
    }

    public async register_reader(user: Account, reader: Reader): Promise<any>{
      let cpt = this.accountService.create(user)
      this.readerService.create(reader)
      return cpt
    }

}
