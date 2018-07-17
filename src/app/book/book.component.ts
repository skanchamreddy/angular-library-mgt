import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book-model';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input() book:Book;


  constructor() { }

  ngOnInit() {
  }

}
