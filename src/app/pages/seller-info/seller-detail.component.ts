import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {Router } from "@angular/router";
import {Observable, Subject} from "rxjs";
import { Role } from '../../enum/Role';

@Component({
    selector: 'app-seller-detail',
    templateUrl: './seller-detail.component.html',
    styleUrls: ['./seller-detail.component.css']
})
export class SellerDetailComponent implements OnInit {

    constructor(private userService: UserService,
                private router: Router) {
    }

    user= new User();

    isInvalid: boolean;
    isLogout: boolean;
    submitted = false;


    ngOnInit() {
    /* const account = this.userService.currentUserValue.account;

        this.userService.get(account).subscribe( u => {
            this.user = u;
            this.user.password = '';
        }, e => {

      });*/
    }

    onSubmit() {
        this.submitted = true;
        this.userService.update(this.user).subscribe(u => {
            this.userService.nameTerms.next(u.firstName);
            let url = '/';
            if (this.user.role != Role.Customer) {
                url = '/seller';
            }
            this.router.navigateByUrl(url);
        }, _ => {})
    }

    goToBuyer(){
        this.router.navigate(['/profile/buyer']);
    }

}
