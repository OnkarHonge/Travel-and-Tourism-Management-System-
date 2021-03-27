import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  url = 'http://localhost:4000/empcategory'

  constructor(private http: HttpClient) { 
    //  this.http=http;
  }
  getCategory() {
    return this.http.get(this.url)
  }
  
  }