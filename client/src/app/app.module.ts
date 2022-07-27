import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { UsersTableComponent } from './users/users-table/users-table.component';
import { FormsModule } from '@angular/forms';
import { TableRowComponent } from './users/user-table-row/table-row.component';
import { HumanizePipe } from './pipes/humanize.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AddUserComponent } from './users/add-user/add-user.component';
import { HomepageComponent } from './homepage/homepage.component';
import {CustomersTableComponent} from "./customers/customers-table/customers-table.component";
import { CustomerTableRowComponent } from './customers/customer-table-row/customer-table-row.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerUsersComponent } from './customers/customer-users/customer-users.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    TableRowComponent,
    HumanizePipe,
    AddUserComponent,
    HomepageComponent,
    CustomersTableComponent,
    CustomerTableRowComponent,
    AddCustomerComponent,
    CustomerUsersComponent,
    UsersComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
