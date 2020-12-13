import { Component, OnInit } from '@angular/core';
import {CreateUserService, User} from '../create-user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public id: number;
  public books: Array<Book> = [];
  public films: Array<Film> = [];
  constructor(private service: CreateUserService) {
    this.books = [];
    this.films = [];
  }

    ngOnInit(): void {
      /*this.service.getBook(this.id).subscribe((x) => {
        this.books = x.books;
        this.films = x.films;
      });*/
  }
}
export class Book {
  public id: number;
  public title: string;
}

export class Film {
  public id: number;
  public title: string;
}
