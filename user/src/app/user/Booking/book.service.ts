import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookingService {

  url1 = 'http://localhost:4000/bookingdetails'
  url2 = 'http://localhost:4000/roomcategory'
  url3 = 'http://localhost:4000/bedding'
  url4 = 'http://localhost:4000/user'

  constructor(private http: HttpClient) { }

  book(check_in_date='', check_out_date='', categoryid=0, beddingtype='', bedid=0) {
    const body = {
      check_in_date:check_in_date,
      check_out_date:check_out_date,
      categoryid:categoryid,
      beddingtype:beddingtype,
      bedid:bedid
    }

    return this.http.post(this.url1 + '/book', body)
  }

  getRoomCategory() {
    return this.http.get(this.url2)
  }

  getBeddingCategory() {
    return this.http.get(this.url3)
  }
  getId(){
    return this.http.get(this.url1 + '/id')
  }
}