import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../services/order.service";
import {ProductService} from "../../services/product.service";
import {Order} from "../../models/Order";
import {OrderStatus} from "../../enum/OrderStatus";
import {UserService} from "../../services/user.service";
import {JwtResponse} from "../../response/JwtResponse";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Role} from "../../enum/Role";


@Component({
    selector: 'app-cypherHome-mobile',
    templateUrl: './cypherHome-mobile.component.html',
    styleUrls: ['./cypherHome-mobile.component.css']
})
export class CypherHomeMobileComponent implements OnInit, OnDestroy {

    page: any;
    OrderStatus = OrderStatus;
    currentUser: JwtResponse;
    Role = Role;
    sortBy;
    size;
    brand;

    searchBool:boolean= false;

    constructor(private httpClient: HttpClient,
                private orderService: OrderService,
                private productService : ProductService,
                private userService: UserService,
                private route: ActivatedRoute,
                private router: Router
    ) {
    }
    private querySub: Subscription;

    ngOnInit() { 
       /* this.currentUser = this.userService.currentUserValue;
        this.querySub = this.route.queryParams.subscribe(() => {
          this.update();
        }); 
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            console.log(document.body.scrollTop);
            console.log(document.documentElement.scrollTop);    
            if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
                console.log("HEyy");
              document.getElementById("content").style.marginTop= "200px";
              document.getElementById("background").style.height= "0px";
              document.getElementById("diff").style.backgroundColor= "white";
              document.getElementById("blackLogo").style.display= "block";
              document.getElementById("whiteLogo").style.display= "none";
            //  document.getElementById("hrLine").style.display= "none";
              
            } else {
              document.getElementById("background").style.height= "390px";
              document.getElementById("content").style.marginTop = "400px";
              document.getElementById("diff").style.backgroundColor= "unset";
              document.getElementById("whiteLogo").style.display= "block";
              document.getElementById("blackLogo").style.display= "none";
           //   document.getElementById("hrLine").style.display= "block";
            } 
        }*/
    

    }

    ngOnDestroy(): void {
       // this.querySub.unsubscribe();
    }

    update() {
        let nextPage = 1;
        let size = 10;
        if (this.route.snapshot.queryParamMap.get('page')) {
            const currentPage = +this.route.snapshot.queryParamMap.get('page');
            const size = +this.route.snapshot.queryParamMap.get('size');
            this.getOrders(currentPage, size);
            console.log("Hello");
        }
        else{
            this.getOrders();
        }    
    }


    cancel(order: Order) {
        this.orderService.cancel(order.orderId).subscribe(res => {
            if (res) {
                order.orderStatus = res.orderStatus;
            }
        });
    }

    finish(order: Order) {
        this.orderService.finish(order.orderId).subscribe(res => {
            if (res) {
                order.orderStatus = res.orderStatus;
            }
        })
    }

    goToActive(){
        this.router.navigate(['/active']);
    }

    goToPortifolio(){
        this.router.navigate(['/portifolio']);
    }

    goToProfile(){
        this.router.navigate(['/profile']);
    }

    goToOrder(){
        this.router.navigate(['/order']);
    }

    goToOrderDetails(){
        console.log("Visited goToOrderDetails");
        this.router.navigate(['/order/0']);
    }

    goToSellerDashboard(){
        console.log('Route Success');
    }

    goToSell(){
        this.router.navigate(['/active']);
    }

    getOrders(nextPage : number= 1, size : number= 8){
        console.log("Get Orders Entered");
        this.orderService.getPage(+nextPage, +size).subscribe(data => {
            this.page = data;
            console.log("Data", this.page);
        });
    }

    stopIt(event){
       event.stopPropagation();
    }

    openNav(){
        document.getElementById("mySidenav").style.width = "50%";
    }

    closeNav(){
        document.getElementById("mySidenav").style.width = "0";
    }


    openStealDealsNav() {
      document.getElementById("mySidebar").style.width = "25%";
     // document.getElementById("header").style.zIndex = "0";
    }
    
    closeStealDealsNav() {
       document.getElementById("mySidebar").style.width = "0";
      // document.getElementById("header").style.zIndex= "1";
    } 

    openApparelNav() {
      document.getElementById("mySidebar").style.width = "25%";
     // document.getElementById("main").style.marginLeft = "250px";
    }
    
    closeApparelNav() {
       document.getElementById("mySidebar").style.width = "0";
      // document.getElementById("main").style.marginLeft= "0";
    }

    goToProductInfo(value){
        console.log("Success");
        this.router.navigate(['/product/0'])
    }

    filterSelection(){
        console.log('Filter Selected');
    }

    funcceer(){
        var dummyEl = document.getElementById('porti');
        console.log(dummyEl);
        var isFocused = (document.activeElement === dummyEl);
        console.log(isFocused);
    }

    sortByFilter(event){
        document.getElementById("bestSell").style.color= "gray";
        document.getElementById("lowPrice").style.color= "gray";
        document.getElementById("highPrice").style.color= "gray";
        this.sortBy= event.target.id;
        console.log('Sort By:',this.sortBy);
        document.getElementById(this.sortBy).style.color= "white";
    }

    sizeFilter(event){
        document.getElementById("UK6").style.color= "gray";
        document.getElementById("UK7").style.color= "gray";
        document.getElementById("UK8").style.color= "gray";
        document.getElementById("UK9").style.color= "gray";
        document.getElementById("UK10").style.color= "gray";
        document.getElementById("UK11").style.color= "gray";
        document.getElementById("UK12").style.color= "gray";
        this.size= event.target.id;
        console.log('Size:',this.size);
        document.getElementById(this.size).style.color= "white";
    }

    brandFilter(event){
        document.getElementById("brand1").style.color= "gray";
        document.getElementById("brand2").style.color= "gray";
        document.getElementById("brand3").style.color= "gray";
        document.getElementById("brand4").style.color= "gray";
        document.getElementById("brand5").style.color= "gray";
        this.brand=event.target.id;
        console.log('Size:',this.brand);
        document.getElementById(this.brand).style.color= "white";
    }

    searchBar(){
        console.log("hello");
        this.searchBool= true;
        document.getElementById("inputSearch").style.width ='50%';
        document.getElementById("inputSearch").style.border ='thin solid black';
        console.log(this.searchBool);
      }
    
      searchBarClose(){
        document.getElementById("inputSearch").style.width ='0%';
        document.getElementById("inputSearch").style.border ='none';
        this.searchBool= false;
      }

}
