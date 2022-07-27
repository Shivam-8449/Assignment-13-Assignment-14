import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent {

  @Input()
  customers!: Customer[];
  @Output()
  customerChanged = new EventEmitter<Customer>();

  constructor(private customerService: CustomerService, private router: Router) { }

  refresh() {
    this.router.navigate(['/customers']).then(
      () => {
        console.log('refresh');
      }
    );
  }

  addCustomer(): void {
    this.router.navigate(['/add-customer']).then(r => {
      console.log('add customer');
    });
  }

  onCustomersChange(customers: Customer): void {
    this.customerChanged.emit(customers);
  }

}
