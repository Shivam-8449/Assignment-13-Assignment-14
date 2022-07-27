import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import {CustomersTableComponent} from "./customers/customers-table/customers-table.component";
import {AddCustomerComponent} from "./customers/add-customer/add-customer.component";
import {CustomerUsersComponent} from "./customers/customer-users/customer-users.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {UsersComponent} from "./users/users.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent
  },
  {
    path: 'customer-users/:id',
    component: CustomerUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
