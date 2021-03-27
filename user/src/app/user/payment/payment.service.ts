import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentService {

  url = 'http://localhost:4000/billing'
  url1 = 'http://localhost:4000/user'
  url2 = 'http://localhost:4000/bookingdetails'


  constructor(private http: HttpClient) { }

  pay(bookid=0, billingmode='', amount=0, billingdate='', status='') {
    const body = {
      bookid:bookid,
      billingmode:billingmode,
      amount:amount,
      billingdate:billingdate,
      status:status
    }

    return this.http.post(this.url , body)
  }

  user(bookid=0, email=''){
    const body = {
      bookid:bookid,
      //email:email
    }
    return this.http.put(this.url1 + '/' + email, body)
  }

  getBookingId( email=''){
    const body = {
      //bookid:bookid,
      email:email
    }
    return this.http.post(this.url1 + '/bookingid', body)
  }

  getAmount(bookid=0) {
    const body = {
      bookid:bookid
    }
    console.log('bookid: '+bookid)
    return this.http.post(this.url2 + '/amount', body)
    
    // return Math.round(Math.random() * 10) * 1000;
  }

}