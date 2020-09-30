import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Router }  from "@angular/router";
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router, private sidebarService: NbSidebarService){}
  
  title = 'Cypher';

  items: NbMenuItem[] = [
    {
      title: 'Sell',
    },
    {
        title: 'How it works',
    },
    {
      title: 'Categories',
      children: [
        {
          title: 'Category 1',
        },
        {
          title: 'Category 2',
        },
      ],
    },
    {
        title: 'Feed',
    },
    {
      title: 'Account',
      children: [
        {
          title: 'Profile',
        },
        {
          title: 'Wishlist',
        },
        {
          title: 'Portifolio',
        },
        {
            title: 'Seller Dashboard',
        },
        {
            title: 'Orders',
        },
        {
            title: 'Settings',
        },
      ],
    },
  ];

  search(){
    console.log("Searched");
  }
}
