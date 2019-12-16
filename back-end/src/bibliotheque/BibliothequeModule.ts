import {Module} from '@nestjs/common';
import {BookService} from './services/BookService';
import {BookController} from './BookController';
import {BookEntity} from './entities/BookEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/AuthorEntity';
import { AuthorController } from './AuthorController';
import { AuthorService } from './services/AuthorService';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity, AuthorEntity]),
    ],
    controllers: [
        BookController,
        AuthorController,
    ],
    providers: [
        BookService,
        AuthorService,
    ],
})
export class BibliothequeModule {
}
