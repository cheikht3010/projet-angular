import {Module} from '@nestjs/common';
import {BookService} from './services/BookService';
import {BookController} from './BookController';
import {BookEntity} from './entities/BookEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity]),
    ],
    controllers: [
        BookController,
    ],
    providers: [
        BookService,
    ],
})
export class BibliothequeModule {
}
