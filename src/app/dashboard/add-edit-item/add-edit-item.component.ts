import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ItemService} from "../../services/item.service";
import {MatSelectModule} from "@angular/material/select";
import {MatStepperModule} from "@angular/material/stepper";

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent implements OnChanges {
  @Input("item") item: any;

  id: string = "";
  title = new FormControl('', [Validators.required]);
  overview = new FormControl('', [Validators.required]);
  stepsToReproduce = new FormControl('', [Validators.required]);
  expectedResults = new FormControl('', [Validators.required]);
  severity = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);

  constructor(private itemService: ItemService) {
  }

  //se apeleaza de fiecare data cand se schimba itemul de sus
  ngOnChanges(changes: SimpleChanges) {
    console.log("Item a ajuns in Add edit component");
    console.log(this.item);
    if (this.item != null) {
      this.id = this.item.id;
      this.title = new FormControl(this.item.title, [Validators.required]);
      this.overview = new FormControl(this.item.overview, [Validators.required]);
      this.stepsToReproduce = new FormControl(this.item.stepsToReproduce, [Validators.required]);
      this.expectedResults = new FormControl(this.item.expectedResults, [Validators.required]);
      this.severity = new FormControl(this.item.severity, [Validators.required]);
      this.image = new FormControl(this.item.image, [Validators.required]);
    }
  }

  getErrorMessage(input: FormControl): string {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  onSave(): void {
    let itemData = {
      id: this.id,
      title: this.title.getRawValue()!,
      overview: this.overview.getRawValue()!,
      stepsToReproduce: this.stepsToReproduce.getRawValue()!,
      expectedResults: this.expectedResults.getRawValue()!,
      severity: this.severity.getRawValue()!,
      image: this.image.getRawValue()!
    };
    console.log(itemData);
    if (itemData.id == "") {
      this.itemService.createItem(itemData);
    } else {
      this.itemService.updateItem(itemData);
    }
    this.resetForm();
  }

  resetForm() {
    this.item = null;
    this.id = "";
    this.title = new FormControl('', [Validators.required]);
    this.overview = new FormControl('', [Validators.required]);
    this.stepsToReproduce = new FormControl('', [Validators.required]);
    this.expectedResults = new FormControl('', [Validators.required]);
    this.severity = new FormControl('', [Validators.required]);
    this.image = new FormControl('', [Validators.required]);
  }
}
