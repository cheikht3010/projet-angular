import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {ManagerService} from '../services/ManagerService';
import {ManagerEntity} from '../entities/ManagerEntity';
import {CreateManager} from '../managers/CreateManager';
import {Manager} from '../managers/Manager';
import {EditManager} from '../managers/EditManager';

@Controller('managers')
export class ManagerController {

    constructor(private managerService: ManagerService) {
    }

    @Get()
    findAll(): Promise<ManagerEntity[]> {
        return this.managerService.findAll();
    }

    @Get(':id')
    findById(@Param() params: any): Promise<ManagerEntity> {
      return this.managerService.findById(params.id);
    }

    @Post()
    create(@Body() createManager: CreateManager): Promise<Manager> {
        return this.managerService.create(createManager);
    }

    @Put()
    edit(@Body() editManager: EditManager): Promise<Manager> {
        return this.managerService.edit(editManager);
    }

    @Delete(':id')
    delete(@Param() managerId: number) {
        this.managerService.delete(managerId);
    }
}
