import { Injectable } from '@angular/core';
import {ApiConfig} from '../ApiConfig';
import {HttpClient} from '@angular/common/http';
import {PostListItem} from './dataModel/PostListItem'


@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url + '/books';

    constructor(private httpClient : HttpClient ){
    }
   public findAll(): Promise<PostListItem[]> {
       return this.httpClient.get(this.URL) as unknown as Promise<PostListItem[]>;
    }
}