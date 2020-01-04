import { Injectable } from '@angular/core';
import {ApiConfig} from '../ApiConfig';
import {HttpClient} from '@angular/common/http';
import {PostListItem} from './dataModel/PostListItem'
import { Authors } from './dataModel/Authors';


@Injectable()
export class PostResource {
    private readonly URL = ApiConfig.url + '/books';
    private readonly URLAuthors = ApiConfig.url + '/authors';
    

    constructor(private httpClient : HttpClient ){
    }
   public findAll(): Promise<PostListItem[]> {
       return this.httpClient.get(this.URL) as unknown as Promise<PostListItem[]>;
    }
    public findAllAuthors(): Promise<Authors[]> {
        return this.httpClient.get(this.URLAuthors) as unknown as Promise<Authors[]>;
     }
     async getByIsbn(id: number) {
        console.log(this.URL + 'get/' + id);
        return await new Promise((resolve) => {
          this.httpClient.get(this.URL + 'get/' + id).subscribe(value => {
            resolve(value);
          });
        });
      }
}