import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';

@Component({
    selector: 'newuser-component',
    templateUrl:'./newuser.component.html',
    styleUrls:['./newuser.component.css']
})

export class NewuserComponent{
   

    constructor(private router: Router,
        private panelService:PanelService){}
        
}