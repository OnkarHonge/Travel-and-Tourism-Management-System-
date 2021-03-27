import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as toastr from 'toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password = ''
  id = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) { 
    this.id = this.activatedRoute.snapshot.params['id']
    console.log(this.id)
  }

  ngOnInit() {
  }

  onReset() {
    this.service
      .resetPassword(this.password, this.id)
      .subscribe(response => {
        console.log(response)
        if (response['status'] == 'success') {
          this.router.navigate(['/login-component'])
        } else {
          toastr.error(response['error'])
        }
      })
  }
}
