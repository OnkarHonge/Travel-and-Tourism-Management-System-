import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';
import {StatusService} from '../status/status.service'

@Component({
    selector: 'status-component',
    templateUrl:'./status.component.html',
    styleUrls:['./status.component.css']
})

export class StatusComponent{

    Users=[]

    bookid=''
    firstname=''
    lastname=''
    email=''
    contact=0
    amount=0
    roomcategory=''
    beddingcategory=''

    constructor(private router: Router,
        private panelService:PanelService,
        private adminService:StatusService){
           this.loadCategories()
        }
        loadCategories(){
            this.adminService
            .getCategory()
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log(response['data'])
                    this.Users = response['data']
                  }else{
                    console.log(response['error'])
                  }
            })
            
        }

        Back(){
            this.router.navigate(['/panel-component'])
        }

}