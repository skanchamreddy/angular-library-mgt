import { Component, OnInit } from '@angular/core';
import {Book} from './models/book-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books :  Book[] ;

 constructor(){

 }

ngOnInit(){
  this.books=[{
    code:"001",
    author:'oley',
    name:"Angular 4",
    thumbNail:"http://flatable.phoenixcoded.net/ltr/horizontal-static-icon/assets/images/user.png"
},
{
  code:"002",
  author:'oley 2',
  name:"Angular 5",
  thumbNail:"http://flatable.phoenixcoded.net/ltr/horizontal-static-icon/assets/images/user.png"
}];

}


}
