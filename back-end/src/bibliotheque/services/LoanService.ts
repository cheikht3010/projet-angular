import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {LoanEntity} from '../entities/LoanEntity';
import {CreateLoan} from '../loans/CreateLoan';
import {Loan} from '../loans/Loan';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditLoan} from '../loans/EditLoan';

@Injectable()
export class LoanService {
    constructor(@InjectRepository(LoanEntity) private readonly loanRepository: Repository<LoanEntity>) {
    }

    async findAll(): Promise<LoanEntity[]> {
        return await this.loanRepository.find();
    }

    async findById(id: number): Promise<LoanEntity> {
        const result = await this.loanRepository.find({ emp_id: id });
        return result[0];
    }
     
    public create(createLoan: CreateLoan): Promise<Loan> {
       return this.loanRepository.save(createLoan);
    }


    public edit(editLoan: EditLoan): Promise<Loan> {
        return this.loanRepository.save(editLoan);
    }

    public delete(loanId: number): void {
        this.loanRepository.delete(loanId);
    }
}
