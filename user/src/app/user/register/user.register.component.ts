import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as toastr from 'toastr';
import {UserService} from '../user.service'

@Component({
    selector: 'register-component',
    templateUrl: './user.register.component.html',
    styleUrls: ['./user.register.component.css']
})
export class RegisterComponent{
    user=[]

    firstname=''
    lastname=''
    email=''
    contact=0
    username=''
    password=''
    constructor(
        private router: Router,
        private userService: UserService
    ){
        // this.userService
        // .registerUser()
        // .subscribe(response=>{
        //     if(response['status']=='success'){
        //         this.user=response['data']
        //     }else{
        //         console.log(response['error'])
        //     }
        // })
    }

   

     onLogin()
     {
         this.userService
         .registerUser( this.firstname,
         this.lastname, this.email,this.contact, this.username,
          this.password )
             .subscribe(response=>{
                 console.log(response)
                 if (response['status'] == 'success') {
                     toastr.success("data inserted successfully")
                     this.router.navigate(['/login-component'])
                   } else {

                   }
             })
     }
}