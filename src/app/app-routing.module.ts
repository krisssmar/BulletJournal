import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {MainComponent} from './main/main.component';
import {CalendarComponent} from './calendar/calendar.component';
import {GoalsComponent} from './goals/goals.component';
import {LoginComponent} from './login/login.component';
import {DayComponent} from './day/day.component';


const routes: Routes = [
  {path : '', pathMatch: 'full', component: MainComponent},
  {path : 'books_and_films', component: BooksComponent},
  {path : 'calendar', component: CalendarComponent},
  {path : 'goals', component: GoalsComponent},
  {path : 'login', component: LoginComponent},
  {path : 'day/:id', component: DayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
