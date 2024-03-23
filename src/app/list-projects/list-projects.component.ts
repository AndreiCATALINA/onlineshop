import {Component} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    NgForOf,
    MatIconModule
  ],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css'
})
export class ListProjectsComponent {

  projects: Array<any> = [];

  constructor(private projectService: ProjectService) {
    this.projectService.getAllProjectsFromServer().subscribe((projectList:Array<any>) => {
      console.log("Projects");
      console.log(projectList);
      this.projects = projectList;
    })
  }

  onEdit(project:any){
    this.projectService.updateProject(project);
  }
  onDelete(project:any){
    this.projectService.deleteProject(project.id);
  }



}
