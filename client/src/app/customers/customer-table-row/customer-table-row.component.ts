import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../models/customer.model";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tr[app-customer-table-row]',
  templateUrl: './customer-table-row.component.html',
  styleUrls: ['./customer-table-row.component.css']
})
export class CustomerTableRowComponent implements OnInit {

  @Input()
  customer!: Customer;
  @Output()
  customerChanged: EventEmitter<Customer> = new EventEmitter<Customer>();

  editMode: boolean = false;

  constructor(private customerService:CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  refresh() {
    this.customerChanged.emit(this.customer);
  }

  edit(): void {
    this.editMode = true;
  }

  async delete(): Promise<void> {
    await this.customerService.deleteCustomer(this.customer.id).subscribe(
      () => {
        this.refresh();
      }
    );
  }

  async save(): Promise<void> {
    this.editMode = false;
    await this.customerService.updateCustomer(this.customer).subscribe(
      () => {
        this.refresh();
      }
    );
  }

  addCustomer(): void {
    this.router.navigate(['/add-customer']);
  }

  cancel(): void {
    this.editMode = false;
    this.refresh();
  }

  showUsers(): void {
    this.router.navigate(['/customer-users', this.customer.id]).then(r => {
      console.log(r);
    });
  }
}
