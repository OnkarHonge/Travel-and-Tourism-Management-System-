import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as toastr from 'toastr';

@Component({
    selector: 'website-component',
    templateUrl: './website.component.html',
    styleUrls: ['./website.component.css']
})
export class WebsiteComponent{

    constructor(
          private router: Router){}

          session = sessionStorage['login_status']
    onBook()
    {
        if(this.session =='1')
        {

            this.router.navigate(['book-component'])
        }
        else{
            toastr.error('Please Login')
            this.router.navigate(['login-component'])
            
        }
    }

    onLogout()
  {
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('userid')
    sessionStorage.removeItem('username')
    this.router.navigate(['/'])
  }
}

