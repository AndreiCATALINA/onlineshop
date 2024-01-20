import { Component } from '@angular/core';
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  itemData : any;

  onChangeItem(item : any){
    console.log("Item a ajuns in dashboard");
    console.log(item);
    //salvam itemul primit in componenta de dashboard
    this.itemData = item;
  }
}
