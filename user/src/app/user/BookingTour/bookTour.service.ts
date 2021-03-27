import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookingTourService {

  url1 = 'http://localhost:4000/bookingtourdetails'
  url2 = 'http://localhost:4000/destinations'
  url3 = 'http://localhost:4000/bedding'
  url4 = 'http://localhost:4000/user'

  constructor(private http: HttpClient) { }

  book(destinationid=0, packagetype='') {
    const body = {
      destinationid:destinationid,
      packagetype:packagetype
    }

    return this.http.post(this.url1 + '/booktour', body)
  }

  getDestination() {
    return this.http.get(this.url2)
  }

  // getBeddingCategory() {
  //   return this.http.get(this.url3)
  // }
  // getId(){
  //   return this.http.get(this.url1 + '/id')
  // }
}