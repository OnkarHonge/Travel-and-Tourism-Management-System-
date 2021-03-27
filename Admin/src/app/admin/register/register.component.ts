import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';
import * as toastr from 'toastr';
import { CategoryService } from '../admin.empcaregory';


@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent{

    category=[]

    categoryid=null
    empfirstname=''
    emplastname=''
    empemail=''
    empcontact=0
    empusername=''
    dateofjoining=''
    dateofbirth=''
    //image=''
    password=''
    salary=0

    image:any
    constructor(
        private router: Router,
        private adminService: AdminService,
        private categoryService:CategoryService
    ){
        this.categoryService
        .getCategory()
        .subscribe(response=>{
            if(response['status']=='success'){
                this.category=response['data']
                this.categoryid=this.category[0].categoryid
            }else{
                console.log(response['error'])
            }
        })
    }

    onSelectFile(event) {
        this.image = event.target.files[0]
      }

     onLogin()
     {
         this.adminService
         .registerAdmin(this.categoryid, this.empfirstname,
         this.emplastname, this.empemail,this.empcontact, this.empusername,this.dateofjoining, this.dateofbirth, this.image,
          this.password, this.salary )
             .subscribe(response=>{
                 console.log(response)
                 if (response['status'] == 'success') {
                     toastr.success('Successfully Registered')
                     this.router.navigate(['/admin-login'])
                   } else {

                   }
             })
     }
}