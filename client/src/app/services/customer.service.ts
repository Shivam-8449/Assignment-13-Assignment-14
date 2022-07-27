import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Customer} from "../models/customer.model";
import {catchError, map, tap} from "rxjs/operators";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:3000/customers';  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url)
      .pipe(
        tap((_: any) => console.log('fetched customers')),
        catchError(this.handleError<Customer[]>('getCustomers', []))
      );
  }

  getCustomerByID(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap((_: any) => console.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  getUsersByCustomerID(id: number): Observable<User[]> {
    const url = `${this.url}/${id}/users`;
    return this.http.get<User[]>(url).pipe(
      tap((_: any) => console.log(`fetched users for customer id=${id}`)),
      catchError(this.handleError<User[]>(`getUsersByCustomerID id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new customer to the server */
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer, this.httpOptions).pipe(
      tap((newCustomer: Customer) => console.log(`added customer w/ id=${newCustomer.id}`)),
      catchError(this.handleError<Customer>('addCustomer'))
    );
  }

  /** DELETE: delete the customer from the server */
  deleteCustomer(id: number): Observable<Customer> {
    const url = `${this.url}/${id}`;

    return this.http.delete<Customer>(url, this.httpOptions).pipe(
      tap((_: any) => console.log(`deleted customer id=${id}`)),
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  /** PUT: update the customer on the server */
  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.url}/${customer.id}`;
    return this.http.put<Customer>(url, customer, this.httpOptions).pipe(
      tap((_: any) => console.log(`updated customer id=${customer.id}`)),
      catchError(this.handleError<Customer>('updateCustomer'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
