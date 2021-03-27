import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatusService {

  url1 = 'http://localhost:4000/bookingdetails'
  
  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get(this.url1+'/join')
  }

  UserBookid() {
    return this.http.get(this.url1+'/join')
  }
}
