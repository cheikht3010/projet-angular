import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Observable} from 'rxjs';
import {BookService} from '../services/BookService';
import {BookEntity} from '../entities/BookEntity';
import {CreateBook} from '../books/CreateBook';
import {Book} from '../books/Book';
import {EditBook} from '../books/EditBook';

@Controller('books')
export class BookController {

    constructor(private bookService: BookService) {
    }

    @Get()
    findAll(): Promise<BookEntity[]> {
        return this.bookService.findAll();
    }

    @Get(':isbn')
    findByIsbn(@Param() params: any): Promise<BookEntity> {
      return this.bookService.findByIsbn(params.isbn);
    }

    @Post()
    create(@Body() createBook: CreateBook): Promise<Book> {
        return this.bookService.create(createBook);
    }

    @Put()
    edit(@Body() editBook: EditBook): Promise<Book> {
        return this.bookService.edit(editBook);
    }

    @Delete(':id')
    delete(@Param() bookIsbn: string) {
        this.bookService.delete(bookIsbn);
    }
}
