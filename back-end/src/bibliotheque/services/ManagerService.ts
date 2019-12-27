import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ManagerEntity} from '../entities/ManagerEntity';
import {CreateManager} from '../managers/CreateManager';
import {Manager} from '../managers/Manager';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditManager} from '../managers/EditManager';

@Injectable()
export class ManagerService {
    constructor(@InjectRepository(ManagerEntity) private readonly managerRepository: Repository<ManagerEntity>) {
    }

    async findAll(): Promise<ManagerEntity[]> {
        return await this.managerRepository.find();
    }

    async findById(id: number): Promise<ManagerEntity> {
        const result = await this.managerRepository.find({ mng_id: id });
        return result[0];
    }

    public create(createManager: CreateManager): Promise<Manager> {
       return this.managerRepository.save(createManager);
    }

    public edit(editManager: EditManager): Promise<Manager> {
        return this.managerRepository.save(editManager);
    }

    public delete(managerId: number): void {
        this.managerRepository.delete(managerId);
    }
}
