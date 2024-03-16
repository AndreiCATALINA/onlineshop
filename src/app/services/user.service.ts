import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;
  private apiUrl:string = "http://localhost:8081/api/customers";
  private userObservable = new BehaviorSubject([]);

  constructor(private httpClient:HttpClient) {
    this.readUsers();
  }
  public setLoggedUser(user:any){
    this.user = user;
  }

  public getLoggedUser(){
    return this.user;
  }

  getUserList() {
    return this.userObservable.asObservable();
  }

  createUser(user: any) {
    //tipuri de request:
    //GET - READ
    //POST - CREATE
    //PUT,PATCH - UPDATE
    //DELETE - DELETE
    this.httpClient.post(`${this.apiUrl}/addNewCustomer`, user).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      this.readUsers();// se actualizeaza lista de elemente la fiecare adaugare
    })
  }

  updateUser(user: any) {
    this.httpClient.put(`${this.apiUrl}/updateCustomer`, user).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      this.readUsers();
    })
  }

  deleteUser(user: any) {
    this.httpClient.delete(`${this.apiUrl}/deleteCustomerById/${user.id}`).subscribe((response: any)=> {
      console.log(response);
      this.readUsers();
    })
  }

  readUsers() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      this.userObservable.next(response.data);//lambda expresion (trimite notificari catre toti care au dat subscribe)
      console.log(response);
    })
  }
}
