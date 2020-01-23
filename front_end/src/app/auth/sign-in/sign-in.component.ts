import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

const found = 'found';
const create = 'create';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  authService: any;
  reactiveFormLogin: any;
  router: any;
  formBuilder: any;
  status: string;
  reactiveFormRegister: any;

  constructor() { }

  ngOnInit() {
    this.reactiveFormLogin = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }  

  onLogin(type: string) {
    console.log('login : ', this.reactiveFormLogin.value);
    this.authService.singIn(this.reactiveFormLogin.value, 'login').then(
      (result: any) => {
        if (found === result.code) {
          this.status = 'User is found';
          console.log(found);
          this.router.navigate(['listBook']);
        } else if (create === result.code) {
          this.status = 'User is created';
          console.log(create);
          this.router.navigate(['listBook']);
        } else {
          this.status = 'User is not found';
        }
      }
    );
  }
 


  get name() {
    return this.reactiveFormLogin.get('name');
  }
  get password() {
    return this.reactiveFormLogin.get('password');
  }
}
