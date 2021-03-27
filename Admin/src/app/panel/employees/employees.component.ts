import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';
import {EmployeeService} from '../employees/employees.service'
import * as toastr from 'toastr';

@Component({
    selector: 'employees-component',
    templateUrl:'./employees.component.html',
    styleUrls:['./employees.component.css']
})

export class EmployeeComponent{
   
    Employee=[]

    catogories=''
    empid=0
    empfirstname=''
    emplastname=''
    empemail=''
    empcantact=0
    dateofjoining=0
    dateofbirth=0
    salary=0

    constructor(private router: Router,
        private panelService:PanelService,
        private employeeService: EmployeeService){ this.loadEmployees()}
        
        loadEmployees(){
            this.employeeService
            .getEmployee()
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log(response['data'])
                    this.Employee = response['data']
                  }else{
                    console.log(response['error'])
                  }
            })
            
        }

        Back(){
            this.router.navigate(['/panel-component'])
        }

        onDelete(empid:number){
            this.employeeService
            .deleteEmployee(empid)
            .subscribe(response => {
              if (response['status'] == 'success') {
                toastr.success('Employee deleted')
                this.loadEmployees()
              } else {
                console.log(response['error'])
              }
            })
        }

        onUpdate(empid:number){
            this.router.navigate(['/editemployee-component'])
            return empid
        }
}