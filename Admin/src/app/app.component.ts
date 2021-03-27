import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Flora';

  empusername = ''
  session = sessionStorage['login_status']
  sessionCategory = sessionStorage['categoryid']

  constructor(
    private router: Router){
      this.empusername = sessionStorage['empusername']
    }

  onLogout()
  {
    sessionStorage.removeItem('login_status')
    sessionStorage.removeItem('empid')
    sessionStorage.removeItem('empusername')
    sessionStorage.removeItem('categoryid')
    this.empusername=''
    this.session=0
    this.sessionCategory=0
    this.router.navigate(['/'])
  }
}
