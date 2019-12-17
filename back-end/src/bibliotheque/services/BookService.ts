import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {BookEntity} from '../entities/BookEntity';
import {CreateBook} from '../books/CreateBook';
import {Book} from '../books/Book';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditBook} from '../books/EditBook';

@Injectable()
export class BookService {
    constructor(@InjectRepository(BookEntity) private readonly bookRepository: Repository<BookEntity>) {
    }

    async findAll(): Promise<BookEntity[]> {
        return await this.bookRepository.find();
    }

    async findByIsbn(isbn: string): Promise<BookEntity> {
        const result = await this.bookRepository.find({ lvr_isbn: isbn });
        return result[0];
    }
    
    public create(createBook: CreateBook): Promise<Book> {
       return this.bookRepository.save(createBook);
    }

    public edit(editBook: EditBook): Promise<Book> {
        return this.bookRepository.save(editBook);
    }

    public delete(bookIsbn: string): void {
        this.bookRepository.delete(bookIsbn);
    }
}
