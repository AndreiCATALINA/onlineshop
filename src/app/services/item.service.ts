import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Array<any>=[];
  constructor() { }

  createItem(item:any){
    this.items.push(item);
    console.log(this.items);
  }

  updateItem(item:any){

  }

  deleteItem(item:any){

  }

  readItems(){

  }

}
