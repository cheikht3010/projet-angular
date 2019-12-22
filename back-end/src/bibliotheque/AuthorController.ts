import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {AuthorService} from './services/AuthorService';
import {AuthorEntity} from './entities/AuthorEntity';
import {CreateAuthor} from './authors/CreateAuthor';
import {Author} from './authors/Author';
import {EditAuthor} from './authors/EditAuthor';

@Controller('authors')
export class AuthorController {

    constructor(private authorService: AuthorService) {
    }

    @Get()
    findAll(): Promise<AuthorEntity[]> {
        return this.authorService.findAll();
    }

    @Get(':id')
    findById(@Param() params: any): Promise<AuthorEntity> {
      return this.authorService.findById(params.id);
    }

    @Post()
    create(@Body() createAuthor: CreateAuthor): Promise<Author> {
        return this.authorService.create(createAuthor);
    }

    @Put()
    edit(@Body() editAuthor: EditAuthor): Promise<Author> {
        return this.authorService.edit(editAuthor);
    }

    @Delete(':id')
    delete(@Param() authorId: number) {
        this.authorService.delete(authorId);
    }
}
