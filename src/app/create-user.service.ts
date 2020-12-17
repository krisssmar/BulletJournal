import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  public users: Array<User> = [];
  constructor(private service: CreateUserService) {
  }
  public getDayList(): Observable<Array<Day>>{
    const curDay: Array<Day> = [];
    const Data = new Date();
    const year = Data.getFullYear();
    const month = Data.getMonth() + 1;
    const day = Data.getDate();
    const curId = String(day) + month  + year; // 112021 не пойдет! написать нормальную функцию вычисления ID
    const curList = ['Wake Up', 'Don\'t Die'];
    curDay.push({id: Number(curId), list: curList});
    return of(curDay);
  }

}
export class User{
  public id: number;
  public name: string;
  public password: string;
  public books: Array<BookFilms>;
  public films: Array<BookFilms>;
  public days: Array<Day>;
  public getDays(): Array<Day> {
    return this.days;
  }
}

export class BookFilms {
  public id: number; // начинается с 1 - книга, с 2 - фильм
  public title: string;
}

export class Day {
  public id: number; // день+месяц+год  "01012021" 1 Января 2021
  public list: string[];

}
