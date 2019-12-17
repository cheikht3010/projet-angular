import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {ThemeService} from './services/ThemeService';
import {ThemeEntity} from './entities/ThemeEntity';
import {CreateTheme} from './themes/CreateTheme';
import {Theme} from './themes/Theme';
import {EditTheme} from './themes/EditTheme';

@Controller('themes')
export class ThemeController {

    constructor(private themeService: ThemeService) {
    }

    @Get()
    findAll(): Promise<ThemeEntity[]> {
        return this.themeService.findAll();
    }

    @Get(':id')
    findByIsbn(@Param() params: any): Promise<ThemeEntity> {
      return this.themeService.findById(params.id);
    }

    @Post()
    create(@Body() createTheme: CreateTheme): Promise<Theme> {
        return this.themeService.create(createTheme);
    }

    @Put()
    edit(@Body() editTheme: EditTheme): Promise<Theme> {
        return this.themeService.edit(editTheme);
    }

    @Delete(':id')
    delete(@Param() themeId: number) {
        this.themeService.delete(themeId);
    }
}
