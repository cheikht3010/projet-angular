import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {AccountService} from '../services/AccountService';
import {AccountEntity} from '../entities/AccountEntity';
import {CreateAccount} from '../accounts/CreateAccount';
import {Account} from '../accounts/Account';
import {EditAccount} from '../accounts/EditAccount';

@Controller('accounts')
export class AccountController {

    constructor(private accountService: AccountService) {
    }

    @Get()
    findAll(): Promise<AccountEntity[]> {
        return this.accountService.findAll();
    }

    @Get(':pseudo')
    findByPseudo(@Param() params: any): Promise<AccountEntity> {
      return this.accountService.findByPseudo(params.pseudo);
    }

    @Post()
    create(@Body() createAccount: CreateAccount): Promise<Account> {
        return this.accountService.create(createAccount);
    }
/*
    @Get('create')
    create() {
        this.accountService.create();
        return 'OK';
    }   
*/
    @Put()
    edit(@Body() editAccount: EditAccount): Promise<Account> {
        return this.accountService.edit(editAccount);
    }

    @Delete(':pseudo')
    delete(@Param() pseudo: string) {
        this.accountService.delete(pseudo);
    }
}
