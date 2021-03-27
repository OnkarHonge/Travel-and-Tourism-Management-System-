import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../employees/employees.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  Employee=[]
  empid = 0
  categories = ''
  empemail = ''
  empcontact = ''
  dateofjoining = ''
  dateofbirth = ''
  salary = ''
  image = ''
  empusername = ''
  empfirstname = ''
  emplastname = ''
  session = sessionStorage['login_status']
  sessionCategory = sessionStorage['categoryid']


  constructor(private router: Router,
    private employeeService: EmployeeService) { 
    this.empusername = sessionStorage['empusername']
    this.empfirstname = sessionStorage['empfirstname']
    this.emplastname = sessionStorage['emplastname']
    this.empemail = sessionStorage['empemail']
    this.loadProfile()
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

  ngOnInit() {
  }

}
