import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/Order";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

    constructor(private orderService: OrderService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    order$: Observable<Order>;

    ngOnInit() {
        // this.items$ = this.route.paramMap.pipe(
        //     map(paramMap =>paramMap.get('id')),
        //     switchMap((id:string) => this.orderService.show(id))
        // )
      //  this.order$ = this.orderService.show(this.route.snapshot.paramMap.get('id'));
    }

    goToPortifolio(){
        this.router.navigate(['/portifolio']);
    }

    goToProfile(){
        this.router.navigate(['/profile']);
    }

}
