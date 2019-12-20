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
import { LoanController } from './LoanController';
import { LoanService } from './services/LoanService';
import { LoanEntity } from './entities/LoanEntity';
import { ManagerController } from './ManagerController';
import { ManagerService } from './services/ManagerService';
import { ManagerEntity } from './entities/ManagerEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity, AuthorEntity, ThemeEntity, CopyEntity, LoanEntity, ManagerEntity]),
    ],
    controllers: [
        BookController,
        AuthorController,
        ThemeController,
        CopyController,
        LoanController,
        ManagerController,
    ],
    providers: [
        BookService,
        AuthorService,
        ThemeService,
        CopyService,
        LoanService,
        ManagerService,
    ],
})
export class BibliothequeModule {
}
