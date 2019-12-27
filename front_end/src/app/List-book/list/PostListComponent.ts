import { Component,OnInit } from "@angular/core";
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { PostService } from '../services/PostService';
import { PostListItem } from '../services/dataModel/PostListItem';

@Component({
    selector: 'app-post-list',
    templateUrl: 'PostList.html'
})

export class PostListComponent implements OnInit {
public postList: Promise<PostListItem[]>;

constructor(private postService : PostService){

}
ngOnInit(){
    this.postList= this.postService.getAllPostItems();
}
}
