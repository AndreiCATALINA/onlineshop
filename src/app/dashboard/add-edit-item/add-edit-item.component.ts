import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent {
  title = new FormControl('', [Validators.required]);
  description = new FormControl('',[Validators.required]);
  price=new FormControl('',[Validators.required]);
  imageUrl=new FormControl('',[Validators.required]);

  constructor(private itemService:ItemService) {
  }
  getErrorMessage(input:FormControl):string {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
  onSave():void{
    let itemData = {
      title:this.title.getRawValue()!,
      description:this.description.getRawValue()!,
      price:this.price.getRawValue()!,
      imageUrl:this.imageUrl.getRawValue()!
    };
    console.log(itemData);
    this.itemService.createItem(itemData);
  }
}
