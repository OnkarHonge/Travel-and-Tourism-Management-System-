import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentcopyService {

  url = 'http://localhost:4000/billing'
  url1 = 'http://localhost:4000/user'


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
}