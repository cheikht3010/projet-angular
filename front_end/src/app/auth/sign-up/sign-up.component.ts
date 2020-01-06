import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  authService: any;
  reactiveFormLogin: any;
  router: any;

  constructor() { }

  ngOnInit() {
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
