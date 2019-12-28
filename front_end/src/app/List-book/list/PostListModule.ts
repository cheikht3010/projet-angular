import { NgModule } from "@angular/core";
import { PostListComponent } from './PostListComponent';
import { CommonModule } from '@angular/common';
import { AppareilComponent } from 'src/app/books/books.component';


@NgModule({
    imports: [
        CommonModule
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