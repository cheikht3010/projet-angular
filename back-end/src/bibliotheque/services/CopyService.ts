import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {CopyEntity} from '../entities/CopyEntity';
import {CreateCopy} from '../copies/CreateCopy';
import {Copy} from '../copies/Copy';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditCopy} from '../copies/EditCopy';

@Injectable()
export class CopyService {
    constructor(@InjectRepository(CopyEntity) private readonly copyRepository: Repository<CopyEntity>) {
    }

    async findAll(): Promise<CopyEntity[]> {
        return await this.copyRepository.find();
    }

    async findById(id: number): Promise<CopyEntity> {
        const result = await this.copyRepository.find({ exp_id: id });
        return result[0];
    }
    
    public create(createCopy: CreateCopy): Promise<Copy> {
       return this.copyRepository.save(createCopy);
    }

    public edit(editCopy: EditCopy): Promise<Copy> {
        return this.copyRepository.save(editCopy);
    }

    public delete(copyId: number): void {
        this.copyRepository.delete(copyId);
    }
}
