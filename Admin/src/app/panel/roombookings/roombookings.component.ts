import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';

@Component({
    selector: 'roombooking-component',
    templateUrl:'./roombookings.component.html',
    styleUrls:['./roombookings.component.css']
})

export class RoombookingComponent{
   

    constructor(private router: Router,
        private panelService:PanelService){}
        
}