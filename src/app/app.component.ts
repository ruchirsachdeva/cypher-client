import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
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

  ngOnInit() {
     
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
    console.log(this.isMobile);
  }

  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  } 

}
