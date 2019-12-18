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
import { CopyEntity } from './entities/CopyEntity';
import { CopyController } from './CopyController';
import { CopyService } from './services/CopyService';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity, AuthorEntity, ThemeEntity, CopyEntity]),
    ],
    controllers: [
        BookController,
        AuthorController,
        ThemeController,
        CopyController,
    ],
    providers: [
        BookService,
        AuthorService,
        ThemeService,
        CopyService,
    ],
})
export class BibliothequeModule {
}
