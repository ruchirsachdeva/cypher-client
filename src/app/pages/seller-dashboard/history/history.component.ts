import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../../services/order.service";
import {ProductService} from "../../../services/product.service";
import {Order} from "../../../models/Order";
import {OrderStatus} from "../../../enum/OrderStatus";
import {UserService} from "../../../services/user.service";
import {JwtResponse} from "../../../response/JwtResponse";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Role} from "../../../enum/Role";

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {

    page: any;
    OrderStatus = OrderStatus;
    currentUser: JwtResponse;
    Role = Role;
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
        this.currentUser = this.userService.currentUserValue;
        this.querySub = this.route.queryParams.subscribe(() => {
          this.update();
        });

    }

    ngOnDestroy(): void {
        this.querySub.unsubscribe();
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

    goToVerification(){
        this.router.navigate(['/verification']);
    }

    goToActive(){
        this.router.navigate(['/active']);
    }

    goToOrderDetails(){
        console.log("Visited goToOrderDetails");
        this.router.navigate(['/order/0']);
    }

    getOrders(nextPage : number= 1, size : number= 8){
        console.log("Get Orders Entered");
        this.orderService.getPage(+nextPage, +size).subscribe(data => {
            this.page = data;
            console.log("Data", this.page);
        });
    }
}
