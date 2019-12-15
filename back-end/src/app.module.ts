import {Module} from '@nestjs/common';
import {BibliothequeModule} from './bibliotheque/BibliothequeModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
    imports: [
      BibliothequeModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'test.sqlite',
            synchronize: true,
            logging: true,
            entities: [__dirname + '/**/*Entity{.ts,.js}'],
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
