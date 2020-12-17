import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GoalsComponent } from './goals/goals.component';
import { LoginComponent } from './login/login.component';
import { DayComponent } from './day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MainComponent,
    CalendarComponent,
    GoalsComponent,
    LoginComponent,
    DayComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
