import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showCatMenu : boolean = false;
  catBreak: boolean= false;

  constructor() { }

  ngOnInit(): void {
    window.onclick = function(event) {
      if(document.getElementById('catMenu').style.display == 'block') {
        document.getElementById('catMenu').style.display='none';   
      }
    }
  }

  dropdownClick(){
    if(document.getElementById('catMenu').style.display == 'none')
      document.getElementById('catMenu').style.display='block';
    else if(document.getElementById('catMenu').style.display == 'block')
      document.getElementById('catMenu').style.display='none';
  }

  accountClick(){
    if(document.getElementById('catMenu').style.display == 'block')
      document.getElementById('catMenu').style.display='none';
  }

  stopIt(event){
    event.stopPropagation();
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
