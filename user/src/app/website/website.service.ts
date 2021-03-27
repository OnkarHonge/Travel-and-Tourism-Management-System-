import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WebsiteService {

  url = 'http://localhost:4000/user'

  constructor(private http: HttpClient) { }
}