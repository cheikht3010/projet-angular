import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {ReaderService} from '../services/ReaderService';
import {ReaderEntity} from '../entities/ReaderEntity';
import {CreateReader} from '../readers/CreateReader';
import {Reader} from '../readers/Reader';
import {EditReader} from '../readers/EditReader';

@Controller('readers')
export class ReaderController {

    constructor(private readerService: ReaderService) {
    }

    @Get()
    findAll(): Promise<ReaderEntity[]> {
        return this.readerService.findAll();
    }

    @Get(':id')
    findById(@Param() params: any): Promise<ReaderEntity> {
      return this.readerService.findById(params.id);
    }

    @Post()
    create(@Body() createReader: CreateReader): Promise<Reader> {
        return this.readerService.create(createReader);
    }

    @Put()
    edit(@Body() editReader: EditReader): Promise<Reader> {
        return this.readerService.edit(editReader);
    }

    @Delete(':id')
    delete(@Param() readerId: number) {
        this.readerService.delete(readerId);
    }
}
