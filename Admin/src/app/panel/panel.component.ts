import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'panel-component',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent{

    activePath = ''

    constructor(private router: Router)
    {

    }

    switchToComponent(path)
    {
        this.activePath = path
        this.router.navigate([path])
    }
    
}