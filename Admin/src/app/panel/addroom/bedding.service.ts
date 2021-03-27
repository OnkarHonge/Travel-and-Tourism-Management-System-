import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeddingService {

  url = 'http://localhost:4000/bedding'
  url1 = 'http://localhost:4000/availability'

  constructor(private http: HttpClient) { }

  addRoom(
    beddingtype='',
    categoryid=0) {
    const body = {
        beddingtype:beddingtype,
        categoryid:categoryid
    }

    return this.http.post(this.url , body)
  }
  listofRooms(){
    return this.http.get(this.url + '/join')
  }
  deleteRoom(bedid: number) {
    return this.http.delete(this.url + '/' + bedid)
  }
  addRooms(
    roomcategory='',
    beddingcategory='',
    roomcategoryid=0,
    beddingcategoryid=0,
    bookid=0) {
    const body = {
        roomcategory:roomcategory,
        beddingcategory:beddingcategory,
        roomcategoryid:roomcategoryid,
        beddingcategoryid:beddingcategoryid,
        bookid:bookid
    }

    return this.http.post(this.url1 , body)
  }
}
