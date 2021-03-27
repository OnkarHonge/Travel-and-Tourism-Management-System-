import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { PanelComponent } from './panel/panel.component';
import { AdminService } from './admin/admin.service';
import { PanelService } from './panel/panel.service';
import { Route } from '@angular/router';
import { StatusComponent } from './panel/status/status.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CategoryService } from './admin/admin.empcaregory';
import { RoomstatusComponent } from './panel/roomstatus/roomstatus.component';
import { RoombookingComponent } from './panel/roombookings/roombookings.component';
import { PaymentComponent } from './panel/payment/payment.component';
import { NewuserComponent } from './panel/newuser/newuser.component';
import { EmployeeComponent } from './panel/employees/employees.component';
import { AvailableroomsComponent } from './panel/availablerooms/availablerooms.component';
import { AddroomComponent } from './panel/addroom/addroom.component';
import { RoomCategoryService } from './panel/availablerooms/roomcategory.service';
import { BeddingService } from './panel/addroom/bedding.service';
import { RoomCategoryComponent } from './panel/roomcategory/roomcategory.component';
import { StatusService } from './panel/status/status.service';
import { EmployeeService } from './panel/employees/employees.service';
import { EditEmployeeComponent } from './panel/editemployee/editemployee.component';
import { PaymentService } from './panel/payment/payment.service';
import { ProfileComponent } from './panel/profile/profile.component';



const routes: Route[] =[
 {path: '',component:LoginComponent},
 {path: 'admin-login', component:LoginComponent},
 {path: 'admin-register', component:RegisterComponent},
 {path: 'panel-component', component:PanelComponent},
 {path: 'status-component', component:StatusComponent},
 {path: 'roomstatus-component', component:RoomstatusComponent},
 {path: 'roombooking-component', component:RoombookingComponent},
 {path: 'payment-component', component:PaymentComponent},
 {path: 'newuser-component', component:NewuserComponent},
 {path: 'employee-component', component:EmployeeComponent},
 {path: 'availablerooms-component', component:AvailableroomsComponent},
 {path: 'addroom-component', component:AddroomComponent},
 {path: 'roomcategory-component', component:RoomCategoryComponent},
 {path: 'editemployee-component', component:EditEmployeeComponent},
 {path: 'profile-component', component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PanelComponent, 
    StatusComponent,
    RoomstatusComponent,
    RoombookingComponent,
    PaymentComponent,
    NewuserComponent,
    EmployeeComponent,
    AvailableroomsComponent,
    AddroomComponent,
    RoomCategoryComponent,
    EditEmployeeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    //RouterModule.for(routes)
  ],
  providers: [
  AdminService,
  PanelService,
  CategoryService,
  RoomCategoryService,
  BeddingService,
  StatusService, 
  EmployeeService,
  PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
