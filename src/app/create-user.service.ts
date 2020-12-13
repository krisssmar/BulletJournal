import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  public users: Array<User> = [];
  constructor() {
  }

  getBook(id: number): Observable<Array<User>> {
    return
  }
}
export class User{
  public id: number;
  public name: string;
  public password: string;
  public books: Array<Book>;
  public films: Array<Film>;
  constructor(name, password) {
    this.id = 0;
    this.name = name;
    this.password = password;
    this.books[1] = new Book(this.id, 'One');
    this.films[1] = new Film(this.id, 'One');
  }
}

export class Book {
  public id: number;
  public title: string;
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

export class Film {
  public id: number;
  public title: string;
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}
