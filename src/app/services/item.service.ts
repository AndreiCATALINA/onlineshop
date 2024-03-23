import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemObservable = new BehaviorSubject<Array<any>>([]);
  private apiUrl = "http://localhost:8081/api/items";

  constructor(private httpClient: HttpClient) {
    this.readItems();
  }
  getItemList() {
    return this.itemObservable.asObservable();
  }
  createItem(item: any) {
    this.httpClient.post(`${this.apiUrl}/addNewItem`, item).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      this.readItems();
    })
  }
  updateItem(item: any) {
    this.httpClient.put(`${this.apiUrl}/updateItem`, item).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      this.readItems();
    })
  }
  deleteItem(item: any) {
  this.httpClient.delete(`${this.apiUrl}/deleteItem/${item.id}`).subscribe((response: any)=> {
    console.log(response);
    this.readItems();
  })
  }
  readItems() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      this.itemObservable.next(response.data);
      console.log(response);
    })
  }

}
