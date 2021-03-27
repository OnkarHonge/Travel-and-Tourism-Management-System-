import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = ''

  constructor(
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit() {
  }
  onSend() {
    this.service
      .forgotPassword(this.email)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.router.navigate(['/login-component'])
        } else {
          toastr.error(response['error'])
        }
      })
  }

}
