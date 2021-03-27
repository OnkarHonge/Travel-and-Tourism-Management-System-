import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';

@Component({
    selector: 'roomstatus-component',
    templateUrl:'./roomstatus.component.html',
    styleUrls:['./roomstatus.component.css']
})

export class RoomstatusComponent{
   

    constructor(private router: Router,
        private panelService:PanelService){}
        
}