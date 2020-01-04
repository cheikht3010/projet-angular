import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
    this.reactiveFormLogin = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }  
  onLogin(type: string) {
    this.authService.singIn(this.reactiveFormLogin.value, type).then(
      (user: any) => {
        if (200 === user.status) {
          this.router.navigate(['listBook']);
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
