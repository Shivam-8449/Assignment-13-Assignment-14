import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User, Role} from "../../models/user.model";
import {Customer} from "../../models/customer.model";
import {CustomerService} from "../../services/customer.service";
import {async, tap} from "rxjs";

@Component({
  selector: 'app-customer-users',
  templateUrl: './customer-users.component.html',
  styleUrls: ['./customer-users.component.css']
})
export class CustomerUsersComponent implements OnInit {

  customer!: Customer | undefined;
  associatedUsers!: User[];

  role = Role;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCustomer(params['id']).then(() => {
        this.getAssociatedUsers();
      });
    });
  }

  async getCustomer(id: number) {
    this.customer = await this.customerService.getCustomerByID(id).toPromise();
  }

  getAssociatedUsers() {
    this.userService.getUsersByCustomerID(this.customer!.id).subscribe(users => {
      this.associatedUsers = users;
    });
  }
}
