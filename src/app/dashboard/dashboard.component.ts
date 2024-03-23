import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AddEditItemComponent} from "./add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {AddEditUserComponent} from "./add-edit-user/add-edit-user.component";
import {ListUsersComponent} from "./list-users/list-users.component";
import {ListProjectsComponent} from "../list-projects/list-projects.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import Chart from 'chart.js'
import {UserService} from "../services/user.service";
import {NgIf} from "@angular/common";
import {AddEditProjectComponent} from "./add-edit-project/add-edit-project.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    AddEditUserComponent,
    ListUsersComponent,
    ListProjectsComponent,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    NgIf,
    AddEditProjectComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  itemData: any;
  userData: any;
  chart: any;

  constructor(private router: Router, private userService: UserService) {

  }

  private setupChart() {

  }

  public isUserDeveloper(){
    return this.userService.getLoggedUser().userRole =="DEVELOPER";
  }

  onChangeItem(item: any) {
    console.log("Item a ajuns in dashboard");
    console.log(item);
    //salvam itemul primit in componenta de dashboard
    this.itemData = item;
  }

  onChangeUser(user: any) {
    console.log("Userul a ajuns in dashboard");
    console.log(user);
    this.userData = user;
  }

  onHome() {
    this.router.navigate(['/', 'home']);
  }

  onLogOut() {
    this.router.navigate(['/', 'auth']);
  }

  // createChart() {
  //
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart
  //
  //     data: {// values on X-Axis
  //       labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
  //         '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
  //       datasets: [
  //         {
  //           label: "Sales",
  //           data: ['467', '576', '572', '79', '92',
  //             '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //         {
  //           label: "Profit",
  //           data: ['542', '542', '536', '327', '17',
  //             '0.00', '538', '541'],
  //           backgroundColor: 'limegreen'
  //         }
  //       ]
  //     },
  //     options: {
  //       aspectRatio: 2.5
  //     }
  //
  //   });
  // }

}
