import {Module} from '@nestjs/common';
import {BookService} from './services/BookService';
import {BookController} from './controllers/BookController';
import {BookEntity} from './entities/BookEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/AuthorEntity';
import { AuthorController } from './controllers/AuthorController';
import { AuthorService } from './services/AuthorService';
import { ThemeController } from './controllers/ThemeController';
import { ThemeService } from './services/ThemeService';
import { ThemeEntity } from './entities/ThemeEntity';
import { CopyEntity } from './entities/CopyEntity';
import { CopyController } from './controllers/CopyController';
import { CopyService } from './services/CopyService';
import { LoanController } from './controllers/LoanController';
import { LoanService } from './services/LoanService';
import { LoanEntity } from './entities/LoanEntity';
import { ManagerController } from './controllers/ManagerController';
import { ManagerService } from './services/ManagerService';
import { ManagerEntity } from './entities/ManagerEntity';
import { ReaderService } from './services/ReaderService';
import { ReaderController } from './controllers/ReaderController';
import { ReaderEntity } from './entities/ReaderEntity';
import { AccountService } from './services/AccountService';
import { AccountEntity } from './entities/AccountEntity';
import { AccountController } from './controllers/AccountController';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookEntity, AuthorEntity, ThemeEntity, CopyEntity, LoanEntity, ManagerEntity, ReaderEntity, AccountEntity, AuthModule]),
    ],
    controllers: [
        BookController,
        AuthorController,
        ThemeController,
        CopyController,
        LoanController,
        ManagerController,
        ReaderController,
        AccountController,
        AuthController,
    ],
    providers: [
        BookService,
        AuthorService,
        ThemeService,
        CopyService,
        LoanService,
        ManagerService,
        ReaderService,
        AccountService,
        AuthService,
        JwtService,
    ],
})
export class BibliothequeModule {
}
