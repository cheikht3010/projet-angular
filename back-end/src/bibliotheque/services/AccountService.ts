import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AccountEntity} from '../entities/AccountEntity';
import {CreateAccount} from '../accounts/CreateAccount';
import {Account} from '../accounts/Account';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditAccount} from '../accounts/EditAccount';

@Injectable()
export class AccountService {
    constructor(@InjectRepository(AccountEntity) private accountRepository: Repository<AccountEntity>) {
    }

    async findAll(): Promise<AccountEntity[]> {
        return await this.accountRepository.find();
    }

    async findByPseudo(pseudo: string): Promise<AccountEntity> {
        const result = await this.accountRepository.find({ cpt_pseudo: pseudo });
        return result[0];
    }
    
    public create(createAccount: CreateAccount): Promise<Account> {
       return this.accountRepository.save(createAccount);
    }

    public edit(editAccount: EditAccount): Promise<Account> {
        return this.accountRepository.save(editAccount);
    }

    public delete(pseudo: string): void {
        this.accountRepository.delete(pseudo);
    }
}
