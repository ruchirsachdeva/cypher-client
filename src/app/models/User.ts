import {Role} from "../enum/Role";

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

    constructor(){
        this.active = true;
        this.role = Role.Customer;
    }
}
