import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {LoanService} from '../services/LoanService';
import {LoanEntity} from '../entities/LoanEntity';
import {CreateLoan} from '../loans/CreateLoan';
import {Loan} from '../loans/Loan';
import {EditLoan} from '../loans/EditLoan';

@Controller('loans')
export class LoanController {

    constructor(private loanService: LoanService) {
    }

    @Get()
    findAll(): Promise<LoanEntity[]> {
        return this.loanService.findAll();
    }

    @Get(':id')
    findById(@Param() params: any): Promise<LoanEntity> {
      return this.loanService.findById(params.id);
    }

    @Post()
    create(@Body() createLoan: CreateLoan): Promise<Loan> {
        return this.loanService.create(createLoan);
    }

    @Put()
    edit(@Body() editLoan: EditLoan): Promise<Loan> {
        return this.loanService.edit(editLoan);
    }

    @Delete(':id')
    delete(@Param() loanId: number) {
        this.loanService.delete(loanId);
    }
}
