import {Injectable} from '@angular/core';
import {PostListItem} from './dataModel/PostListItem'
import { PostResource } from './PostResource';

@Injectable()
export class PostService {
    
    constructor(private postResource: PostResource){

    }
    public getAllPostItems(): Promise<PostListItem[]>{
        return this.postResource.findAll();
    }
}