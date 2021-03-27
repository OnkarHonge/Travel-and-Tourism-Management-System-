import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserService implements CanActivate {

  url = 'http://localhost:4000/user'

  constructor(
    private router: Router,
    private http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user is already logged in
    // if (sessionStorage['login_status'] == '1') {
    if (localStorage['login_status'] == '1') {
      return true
    }

    // if user is not logged yet, load the login page
    this.router.navigate(['/login-component'])
    return false
  }

  forgotPassword(email: string) {
    const body = {
      email: email
    }

    return this.http.post(this.url + '/forgot-password', body)
  }

  resetPassword(password: string, userid: number) {
    const body = {
      password: password,
      userid: userid
    }

    return this.http.post(this.url + '/reset-password', body)
  }
  

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    return this.http.post(this.url + '/login', body)
  }

  registerUser(
    firstname: string,
    lastname:string,
    email:string,
    contact:number,
    username:string,
    password:string) {
    const body = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        contact:contact,
        username:username,
        password:password
    }

    return this.http.post(this.url + '/register', body)
  }

}