import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReposComponent } from './repos/repos.component';
import { ProfileComponent } from './profiles/profile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { StrikethroDirective } from './strikethro.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReposComponent,
    ProfileComponent,
    HomeComponent,
    StrikethroDirective,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
