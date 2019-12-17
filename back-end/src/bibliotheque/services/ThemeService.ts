import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {ThemeEntity} from '../entities/ThemeEntity';
import {CreateTheme} from '../themes/CreateTheme';
import {Theme} from '../themes/Theme';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditTheme} from '../themes/EditTheme';

@Injectable()
export class ThemeService {
    constructor(@InjectRepository(ThemeEntity) private readonly themeRepository: Repository<ThemeEntity>) {
    }

    async findAll(): Promise<ThemeEntity[]> {
        return await this.themeRepository.find();
    }

    async findById(id: number): Promise<ThemeEntity> {
        const result = await this.themeRepository.find({ thm_id: id });
        return result[0];
    }
    
    public create(createTheme: CreateTheme): Promise<Theme> {
       return this.themeRepository.save(createTheme);
    }

    public edit(editTheme: EditTheme): Promise<Theme> {
        return this.themeRepository.save(editTheme);
    }

    public delete(themeId: number): void {
        this.themeRepository.delete(themeId);
    }
}
