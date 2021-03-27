import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentService {

  url = 'http://localhost:4000/billing'
  url2 = 'http://localhost:4000/user'
  url1 = 'http://localhost:4000/bookingdetails'

  constructor(private http: HttpClient) { }

  getPayment() {
    return this.http.get(this.url+'/join')
  }
  
  user(bookid=0, email=''){
    const body = {
      bookid:bookid,
      //email:email
    }
    return this.http.put(this.url2 + '/' + email, body)
  }

  getBookingId( email=''){
    const body = {
      //bookid:bookid,
      email:email
    }
    return this.http.post(this.url2 + '/bookingid', body)
  }

  getId(){
    return this.http.get(this.url1 + '/id')
  }

  insertBookid(bookid=0, email='' )
  {
    const body = {
      bookid:bookid
    }
    return this.http.post(this.url1 + '/bookingid/' + email, body)
  }
}