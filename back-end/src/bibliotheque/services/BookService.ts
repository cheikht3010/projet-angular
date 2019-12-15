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
        /*const pr1 = <Book>({
            lvr_isbn: 'AAA56657',
            lvr_titre: 'Les bouts de bois de Dieu',
            lvr_date_de_publication: new Date(2012, 0, 1),
            lvr_nombre_exemplaire: 10,
            aut_id: 1,
            thm_id: 1});
        this.bookRepository.save(pr1);*/
        
    }

    async findAll(): Promise<BookEntity[]> {
        return await this.bookRepository.find();
    }

    public create(createBook: CreateBook): Promise<Book> {
       return this.bookRepository.save(createBook);
    }

    public edit(editBook: EditBook): Promise<Book> {
        return this.bookRepository.save(editBook);
    }

    public delete(postId: number): void {
        this.bookRepository.delete(postId);
    }
}
