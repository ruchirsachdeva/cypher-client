import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router }  from "@angular/router";
import { event } from 'jquery';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public router: Router,  private deviceService: DeviceDetectorService){
    this.checkDevice();
  }

  title = 'Cypher';

  deviceInfo = null;
  isMobile : boolean= false;
  isTablet : boolean= false;
  isDesktopDevice :  boolean= false;
  searchBool: boolean = false;

  ngOnInit() {
    if(this.router.url != '/' && this.router.url != '/home' && this.router.url!='/cypherHome' && this.isDesktopDevice){
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          document.getElementById('catBreak').style.display='none';   
        }
      } 
    }
  } 

  search(){
    console.log("Searched");
  }

  stopIt(event){
    event.stopPropagation();
  }
  
  checkDevice (){
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  } 

  searchBar(){
    this.searchBool= true;
    document.getElementById("inputSearch").style.width ='85%';
    document.getElementById("inputSearch").style.border ='thin solid black';
  }

  searchBarClose(){
    document.getElementById("inputSearch").style.width ='0%';
    document.getElementById("inputSearch").style.border ='none';
    this.searchBool= false;
  }

  dropdownClick(){
    if(document.getElementById('catBreak').style.display == 'none')
      document.getElementById('catBreak').style.display='block';
    else if(document.getElementById('catBreak').style.display == 'block')
      document.getElementById('catBreak').style.display='none';
  }

  accountClick(){
    if(document.getElementById('catBreak').style.display == 'block')
      document.getElementById('catBreak').style.display='none';
  }

}
