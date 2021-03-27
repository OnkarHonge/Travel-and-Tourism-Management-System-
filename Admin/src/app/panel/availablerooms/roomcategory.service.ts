import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoomCategoryService {

  url = 'http://localhost:4000/roomcategory'

  constructor(private http: HttpClient) { 
    //  this.http=http;
  }
  getCategory() {
    return this.http.get(this.url)
  }
  countCategory() {
    return this.http.get(this.url + '/count')
  }
  addCategory(categoryid: number, category: string, thumbnail:any) {
    const body = {
     categoryid:categoryid,
     category:category,
     thumbnail:thumbnail
    }

    return this.http.post(this.url, body)
  }

  deleteCategory(categoryid: number) {
    return this.http.delete(this.url + '/' + categoryid)
  }
  }