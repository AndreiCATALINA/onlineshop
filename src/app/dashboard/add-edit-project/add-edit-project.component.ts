import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {UserService} from "../../services/user.service";
import {ProjectService} from "../../services/project.service";



@Component({
  selector: 'app-add-edit-project',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  templateUrl: './add-edit-project.component.html',
  styleUrl: './add-edit-project.component.css'
})
export class AddEditProjectComponent implements OnChanges {
  @Input("project") project: any;

  id: string = "";
  projectName = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  budget = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);


  constructor(private userService: UserService, private projectService: ProjectService) {
  }

  //se apeleaza de fiecare data cand se schimba itemul de sus
  ngOnChanges(changes: SimpleChanges) {
    console.log("Project a ajuns in Add edit component");
    console.log(this.project);
    if (this.project != null) {
      this.id = this.project.id;
      this.projectName = new FormControl(this.project.projectName, [Validators.required]);
      this.description = new FormControl(this.project.description, [Validators.required]);
      this.budget = new FormControl(this.project.budget, [Validators.required]);
      this.status = new FormControl(this.project.status, [Validators.required]);
    }
  }

  getErrorMessage(input: FormControl): string {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  onSave(): void {
    let projectData = {
      id: this.id,
      projectName: this.projectName.getRawValue()!,
      description: this.description.getRawValue()!,
      budget: this.budget.getRawValue()!,
      status: this.status.getRawValue()!
    };
    console.log(projectData);
    if (projectData.id == "") {
      this.projectService.createProject(projectData);
    }
    //  else {
    //   this.projectService.update(projectData);
    // }
    this.resetForm();
  }

  resetForm() {
    this.project = null;
    this.id = "";
    this.projectName = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.budget = new FormControl('', [Validators.required]);
    this.status = new FormControl('', [Validators.required]);
  }
}

