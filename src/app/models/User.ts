import {Role} from "../enum/Role";
import {ProductInfo} from './productInfo';

export class User {

    firstName: string;

    lastName: string;

    address: string;

    state: string;

    zip: string;

    country : string;

    email: string;

    phone: string;

    active: boolean;

    role: string;

    password: string;
    confirmPassword : string;

  products: ProductInfo[];

    constructor(){
        this.active = true;
        this.role = Role.Customer;
    }
}
