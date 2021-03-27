import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import * as toastr from 'toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
    // provides:
    // animations:
})

export class LoginComponent{
    empemail = ''
    password = ''
    empusername=''
    categoryid=''
    empfirstname=''
    emplastname=''
    componentToLaunch = 'availablerooms-component'

    constructor(private router: Router,
        private adminService: AdminService,
        private activatedRoute: ActivatedRoute) { this.empusername=sessionStorage['empusername']}

    onLogin(){
        if(this.empemail.length == 0){
            toastr.error('enter valid email')
        }else if(this.password.length == 0 ){
            toastr.error('enter valid password')
        }else{
            this.adminService
            .login(this.empemail,this.password)
            .subscribe(response=>{
                console.log(response)
                if(response['status'] == 'success'){
                    sessionStorage['login_status'] = '1'
                    sessionStorage['empid']=response['data']['empid']
                    sessionStorage['empusername']=response['data']['empusername']
                    sessionStorage['categoryid']=response['data']['categoryid']
                    sessionStorage['empfirstname']=response['data']['empfirstname']
                    sessionStorage['emplastname']=response['data']['emplastname']
                    sessionStorage['empemail']=response['data']['empemail']
                    toastr.success('authenticated')
                    
                    //localStorage['login_status']='1'
                    //localStorage['username']=response['data']['username']
                    //localStorage['userid']=response['data']['id']
                    this.router.navigate(['/profile-component'])
                } else{
                    toastr.error(response['error'])
                }
            })
        }
    }
}