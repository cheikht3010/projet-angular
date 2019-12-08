import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './books/books.component';


import { AppareilService } from './services/appareil.service';
import { ListBookComponent } from './List-book/List-book.component';
import {Routes, RouterModule} from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes=[
  {path: 'listBook', component: ListBookComponent},
  {path: 'listBook/:id', component: DetailComponent},
  {path: 'Reseration/:id', component: ReservationComponent},
  {path: 'Sign-in', component: SignInComponent},
  {path: 'Sign-up', component: SignUpComponent},
  {path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListBookComponent,
    DetailComponent,
    SignInComponent,
    SignUpComponent,
    ReservationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
