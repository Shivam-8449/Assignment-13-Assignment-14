import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer.model";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer = {
    name: "",
    website: "",
    address: ""
  } as Customer;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.addCustomer(this.customer).subscribe(
      (data: any) => {
        this.customerService.getCustomers();
        this.router.navigate(['/customers']).then(r => console.log(r));
      }
    );
  }

}
