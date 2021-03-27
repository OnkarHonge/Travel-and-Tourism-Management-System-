import { Component } from '@angular/core';
import {Router} from '@angular/router';
import * as toastr from 'toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  username = ''
  session = sessionStorage['login_status']

  constructor(private router: Router) {
    this.username = sessionStorage['username']
  }

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
  onBookTour()
  {
      if(this.session =='1')
      {

          this.router.navigate(['book-tour-component'])
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
