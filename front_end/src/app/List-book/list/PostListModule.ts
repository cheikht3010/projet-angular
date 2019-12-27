import { NgModule } from "@angular/core";
import { PostListComponent } from './PostListComponent';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        PostListComponent
    ],
    declarations: [
        PostListComponent
    ],
    providers: []
})

export class PostListModule{

}