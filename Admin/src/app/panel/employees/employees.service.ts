import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  url1 = 'http://localhost:4000/employee'
  url2 = 'http://localhost:4000/empcategory'

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get(this.url1+'/join')
  }

  deleteEmployee(empid:number){
    return this.http.delete(this.url1 + '/' + empid)
  }

  getCategory() {
    return this.http.get(this.url2)
  }

  getProfile(empemail:String){
    return this.http.get(this.url1 + '/join/' + empemail)
  }

  updateEmployee(
    empid:number,
    empfirstname:string,
    emplastname:string,
    empemail:string,
    empcontact:number,
    empusername:string,
    password:string,
    salary:number,
    image:string){
    // const body = {
    //   empid:empid,
    //   empfirstname:empfirstname,
    //   emplastname:emplastname,
    //   empemail:empemail,
    //   empcontact:empcontact,
    //   empusername:empusername,
    //   password:password,
    //   salary:salary,
    //   image:image
    // }

    const body = new FormData()
    body.append('empid','' + empid)
    body.append('empfirstname', empfirstname)
    body.append('emplastname', emplastname)
    body.append('empemail', '' + empemail)
    body.append('empcontact', '' + empcontact)
    body.append('empusername', empusername)
    body.append('password', password)
    body.append('salary', '' + salary)
    body.append('image', image)

  return this.http.put(this.url1 + '/update/' + empid, body)
}
// updateEmployee(empid:number){
//   return this.http.put(this.url1 + '/' +empid)
// }
  
}
