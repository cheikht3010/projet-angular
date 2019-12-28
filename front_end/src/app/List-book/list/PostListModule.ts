import { NgModule } from "@angular/core";
import { PostListComponent } from './PostListComponent';
import { CommonModule } from '@angular/common';
import { AppareilComponent } from 'src/app/books/books.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        PostListComponent,
        AppareilComponent
    ],
    declarations: [
        PostListComponent,
        AppareilComponent
    ],
    providers: []
})

export class PostListModule{

}