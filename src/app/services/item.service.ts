import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = "https://api.codebyte-software.com:2323/api/items";
  items: Array<any> = [];

  constructor(private httpClient: HttpClient) {
  this.readItems();
  }

  createItem(item: any) {
    //tipuri de request:
    //GET - READ
    //POST - CREATE
    //PUT,PATCH - UPDATE
    //DELETE - DELETE
    this.httpClient.post(this.apiUrl, item).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      let itemFromDb = response.data;
      this.items.push(itemFromDb);
    })
  }

  updateItem(item: any) {
    this.httpClient.put(this.apiUrl, item).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      let itemFromDb = response.data;
      this.items.push(itemFromDb);
    })
  }

  deleteItem(item: any) {

  }

  readItems() {
  this.httpClient.get(this.apiUrl).subscribe((response:any) =>{
    this.items = [];
    this.items=response.data;
    console.log(response);
  })
  }

}
