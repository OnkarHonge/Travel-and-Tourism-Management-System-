import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import * as toastr from 'toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './user.login.component.html',
    styleUrls: ['./user.login.component.css']
})
export class LoginComponent{
  email = ''
  password = ''
  componentToLaunch = 'book-component'

  constructor(
    private activatedRoute: ActivatedRoute,
      private router: Router,
      private userService: UserService) { 
        console.log(activatedRoute.snapshot.queryParams)
        this.componentToLaunch = activatedRoute.snapshot.queryParams['screen']
      }

  onLogin(){
    if(this.email.length == 0){
        toastr.error('enter valid email')
    }else if(this.password.length == 0 ){
        toastr.error('enter valid password')
    }else{
        this.userService
        .login(this.email,this.password)
        .subscribe(response=>{
          console.log(response)
            if(response['status'] == 'success'){
              sessionStorage['login_status'] = '1'
              sessionStorage['userid']=response['data']['userid']
              sessionStorage['username']=response['data']['username']
                toastr.success('authenticated')
                //localStorage['login_status']='1'
                //localStorage['username']=response['data']['username']
                //localStorage['userid']=response['data']['id']
                
                // this.router.navigate(['/book-tour-component'])
                this.router.navigate(['/book-component'])
            }else{
                toastr.error(response['error'])
            }
        })
    }
}
}