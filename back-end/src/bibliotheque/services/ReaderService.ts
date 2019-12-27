import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ReaderEntity} from '../entities/ReaderEntity';
import {CreateReader} from '../readers/CreateReader';
import {Reader} from '../readers/Reader';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditReader} from '../readers/EditReader';

@Injectable()
export class ReaderService {
    constructor(@InjectRepository(ReaderEntity) private readonly readerRepository: Repository<ReaderEntity>) {
    }

    async findAll(): Promise<ReaderEntity[]> {
        return await this.readerRepository.find();
    }

    async findById(id: number): Promise<ReaderEntity> {
        const result = await this.readerRepository.find({ lct_id: id });
        return result[0];
    }

    public create(createReader: CreateReader): Promise<Reader> {
       return this.readerRepository.save(createReader);
    }

    public edit(editReader: EditReader): Promise<Reader> {
        return this.readerRepository.save(editReader);
    }

    public delete(readerId: number): void {
        this.readerRepository.delete(readerId);
    }
}
