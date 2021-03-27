import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';
import {EmployeeService} from '../employees/employees.service';
import * as toastr from 'toastr';


@Component({
    selector: 'editemployee-component',
    templateUrl:'./editemployee.component.html',
    styleUrls:['./editemployee.component.css']
})

export class EditEmployeeComponent{
    category=[]

    Employee=[]

    empid = sessionStorage['empid']
    categories=''
    categoryid=0
    empfirstname=''
    emplastname=''
    empemail=''
    empcontact=0
    empusername=''
    dateofjoining=''
    dateofbirth=''
    password=''
    salary=0
    //image=''
    image:any
    constructor(
        private router: Router,
       private employeeService: EmployeeService
    ){
        this.employeeService
        .getCategory()
        .subscribe(response=>{
            if(response['status']=='success'){
                this.category=response['data']
                this.categoryid=this.category[0].categoryid
            }else{
                console.log(response['error'])
            }
        })

        this.loadProfile()
    }

    onSelectFile(event) {
        this.image = event.target.files[0]
      }

    onUpdate(empid:number){
        this.employeeService
        .updateEmployee( this.empid, this.empfirstname, this.emplastname, this.empemail, this.empcontact,this.empusername, this.password, this.salary, this.image  )
        .subscribe(response => {
          if (response['status'] == 'success') {
              console.log(response['data'])
            //this.loadEmployees()
            toastr.success('employee updated successfully')
          } else {
            console.log(response['error'])
            toastr.error('error')
          }
        })
    }

    loadProfile(){
        this.employeeService
                .getProfile(this.empemail)
                .subscribe(response => {
                    if (response['status'] == 'success') {
                        console.log(response['data'])
                        this.Employee = response['data']
                        console.log(this.Employee)
                      }else{
                        console.log(response['error'])
                      }
                })
      }
}