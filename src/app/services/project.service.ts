import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl: string = "http://localhost:8081/api/projects";
  private projectObservable = new BehaviorSubject<Array<any>>([]);
  private allProjectsObservable = new BehaviorSubject(<Array<any>>([]));

  constructor(private httpClient: HttpClient) {
    this.readAllProjects();
  }


  public getProject() {
    return this.projectObservable.asObservable()
  }

  public getAllProjectsFromServer() {
    return this.allProjectsObservable.asObservable();
  }

  public createProject(projectData: {
    description: string;
    id: string;
    projectName: string;
    budget: string;
    status: string
  }) {
    //pregatim body-ul pentru request
    let body = {
      "projectName": projectData.projectName,
      "description": projectData.description,
      "budget": projectData.budget,
      "status": projectData.status,
      // "users": [],//[{"id":1},{"id":52}]
      // "itemList": [],//[{"id":1},{"id":52}]

    }
    console.log(body);
    this.httpClient.post(`${this.apiUrl}/addProject`, body).subscribe((response: any) => {
      console.log(response);
      this.projectObservable.next([]);
      this.readAllProjects();
    })
  }

  updateProject(item: any) {
    this.httpClient.put(`${this.apiUrl}/updateProject`, item).subscribe((response: any) => {
      console.log(response);
      console.log(response.message);

      this.readAllProjects();
    })
  }

  public deleteProject(id: string) {
    this.httpClient.delete(`${this.apiUrl}/deleteProjectById/${id}`).subscribe((response: any) => {
      console.log(response);
      this.readAllProjects();
    })
  }

  public readAllProjects() {
    return this.httpClient.get(`${this.apiUrl}`).subscribe((response: any) => {
      this.allProjectsObservable.next(response.data)
    });
  }

}
