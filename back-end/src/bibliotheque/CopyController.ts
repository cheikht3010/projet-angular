import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {CopyService} from './services/CopyService';
import {CopyEntity} from './entities/CopyEntity';
import {CreateCopy} from './copies/CreateCopy';
import {Copy} from './copies/Copy';
import {EditCopy} from './copies/EditCopy';

@Controller('copies')
export class CopyController {

    constructor(private copyService: CopyService) {
    }

    @Get()
    findAll(): Promise<CopyEntity[]> {
        return this.copyService.findAll();
    }

    @Get(':id')
    findById(@Param() params: any): Promise<CopyEntity> {
      return this.copyService.findById(params.id);
    }

    @Post()
    create(@Body() createCopy: CreateCopy): Promise<Copy> {
        return this.copyService.create(createCopy);
    }

    @Put()
    edit(@Body() editCopy: EditCopy): Promise<Copy> {
        return this.copyService.edit(editCopy);
    }

    @Delete(':id')
    delete(@Param() copyId: number) {
        this.copyService.delete(copyId);
    }
}
