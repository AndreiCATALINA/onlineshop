import { Component } from '@angular/core';
import {ItemService} from "../services/item.service";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  items:Array<any>=[];

  constructor(private itemService:ItemService){
    this.items=itemService.items;
  }

  onEdit(){

  }
  onDelete(){

  }
}
