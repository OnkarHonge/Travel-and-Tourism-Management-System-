import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PanelService {

  url = 'http://localhost:4000/user'

  constructor(private http: HttpClient) { }

  addroom(){}
  availablerooms(){}
  employees(){}
  newuser(){}
  payment(){}
  roombookings(){}
  roomstatus(){}
  status(){}
}