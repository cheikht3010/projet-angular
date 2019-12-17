import {Module} from '@nestjs/common';
import {BookService} from './services/BookService';
import {BookController} from './BookController';
import {BookEntity} from './entities/BookEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/AuthorEntity';
import { AuthorController } from './AuthorController';
import { AuthorService } from './services/AuthorService';
import { ThemeController } from './ThemeController';
import { ThemeService } from './services/ThemeService';
import { ThemeEntity } from './entities/ThemeEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity, AuthorEntity, ThemeEntity]),
    ],
    controllers: [
        BookController,
        AuthorController,
        ThemeController,
    ],
    providers: [
        BookService,
        AuthorService,
        ThemeService,
    ],
})
export class BibliothequeModule {
}
