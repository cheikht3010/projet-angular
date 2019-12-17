import {Injectable} from '@nestjs/common';
import {from, Observable} from 'rxjs';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {AuthorEntity} from '../entities/AuthorEntity';
import {CreateAuthor} from '../authors/CreateAuthor';
import {Author} from '../authors/Author';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {EditAuthor} from '../authors/EditAuthor';

@Injectable()
export class AuthorService {
    constructor(@InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity>) {
    }

    async findAll(): Promise<AuthorEntity[]> {
        return await this.authorRepository.find();
    }

    async findById(id: number): Promise<AuthorEntity> {
        const result = await this.authorRepository.find({ aut_id: id });
        return result[0];
    }
    
    public create(createAuthor: CreateAuthor): Promise<Author> {
       return this.authorRepository.save(createAuthor);
    }

    public edit(editAuthor: EditAuthor): Promise<Author> {
        return this.authorRepository.save(editAuthor);
    }

    public delete(authorId: number): void {
        this.authorRepository.delete(authorId);
    }
}
