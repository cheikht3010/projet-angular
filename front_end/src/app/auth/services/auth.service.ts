import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ApiConfig } from 'src/app/List-book/ApiConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = ApiConfig.url
  user: any = {status: 404, access_token: ''};
  isAuth = false;

  constructor(private httpClient: HttpClient) {
  }

  async singIn(body: object, type: string) {
    return await new Promise(((resolve) => {
      this.isAuth = true;
      this.httpClient.post(this.url + type, body).subscribe(
        (val) => {
          this.user = val;
          resolve(this.user);
        },
        (response) => {
        },
        () => {
          console.log('completed.');
        }
      );
    }));
  }

  singOut() {
    this.isAuth = false;
  }
}
