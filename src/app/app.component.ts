import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
import { event } from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public router: Router){}
  title = 'Cypher';

  ngOnInit() {
     
  } 

  search(){
    console.log("Searched");
  }

  stopIt(event){
    event.stopPropagation();
  }
  
}
