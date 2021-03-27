import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AdminService implements CanActivate {

  url = 'http://localhost:4000/employee'

  constructor(private http: HttpClient, private router: Router) { }

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

  login(empemail: string, password: string) {
    const body = {
      empemail: empemail,
      password: password
    }

    return this.http.post(this.url + '/login', body)
  }

  registerAdmin( categoryid:number, empfirstname:string, emplastname:string,
  empemail:string, empcontact:number, empusername:string, dateofjoining:string,
  dateofbirth:string, image:any, password:string, salary:number) {
    // const body = {
    //     categoryid:categoryid,
    //     //empid:empid,
    //     empfirstname:empfirstname,
    //     emplastname:emplastname,
    //     empemail:empemail,
    //     empcontact:empcontact,
    //     empusername:empusername,
    //     dateofjoining:dateofjoining,
    //     dateofbirth:dateofbirth,
    //     image:image,
    //     password:password,
    //     salary:salary
    // }

    const body = new FormData()
    body.append('categoryid', '' + categoryid)
    body.append('empfirstname', empfirstname)
    body.append('emplastname', emplastname)
    body.append('empemail', '' + empemail)
    body.append('empcontact', '' + empcontact)
    body.append('empusername', empusername)
    body.append('dateofjoining', dateofjoining)
    body.append('dateofbirth', dateofbirth)
    body.append('password', password)
    body.append('salary', '' + salary)
    body.append('image', image)


    return this.http.post(this.url + '/register', body)
  }

}
