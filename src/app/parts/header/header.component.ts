import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  searchBool : boolean = false;

  ngOnInit(): void {
  }

  searchBar(){
    this.searchBool= true;
    document.getElementById("inputSearch").style.width ='80%';
    document.getElementById("inputSearch").style.border ='thin solid black';
  }

  searchBarClose(){
    document.getElementById("inputSearch").style.width ='0%';
    document.getElementById("inputSearch").style.border ='none';
    this.searchBool= false;
  }

  closeCart(){

  }

  openCart(){

  }

}
