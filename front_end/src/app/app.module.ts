import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './books/books.component';


import { AppareilService } from './services/appareil.service';

import {Routes, RouterModule} from "@angular/router";
import { DetailComponent } from './detail/detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { BlogModule } from './List-book/ListModule';
import { PostListComponent } from './List-book/list/PostListComponent';


const appRoutes: Routes=[
  {path: 'listBook', component: PostListComponent},
  {path: 'listBook/:lvr_isbn', component: DetailComponent},
  {path: 'Reseration/:lvr_isbn', component: ReservationComponent},
  {path: 'Sign-in', component: SignInComponent},
  {path: 'Sign-up', component: SignUpComponent},
  {path: 'Details', component: DetailComponent},
  {path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
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
    BlogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
