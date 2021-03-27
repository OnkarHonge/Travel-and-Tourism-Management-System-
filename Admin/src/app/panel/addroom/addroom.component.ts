import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';
import {RoomCategoryService} from '../availablerooms/roomcategory.service';
import {BeddingService} from '../addroom/bedding.service';
import * as toastr from 'toastr';

@Component({
    selector: 'addroom-component',
    templateUrl:'./addroom.component.html',
    styleUrls:['./addroom.component.css']
})

export class AddroomComponent{
   
    category=[]
    bedding=[]
     
    beddingtype=''
    categoryid=null
    bedid=null

    roomcategory=''
    beddingcategory=''
    roomcategoryid=0
    beddingcategoryid=0
    bookid=0
    

    constructor(private router: Router,
        private panelService:PanelService,
        private roomcategoryService:RoomCategoryService,
        private beddingService:BeddingService)
        {
            this.roomcategoryService
            .getCategory()
            .subscribe(response=>{
                if(response['status']=='success'){
                    this.category=response['data']
                    this.categoryid=this.category[0].categoryid
                }else{
                    console.log(response['error'])
                }
            })
            this.loadRooms()
            //this.addintoavailability()
        }
        
        onAddRoom(){
            this.beddingService
          .addRoom(this.beddingtype, this.categoryid )
             .subscribe(response=>{
                 console.log(response)
                 if (response['status'] == 'success') {
                     this.addintoavailability()
                     this.loadRooms()
                     toastr.success('room added')
                   } else {

                   }
             })
        }

        loadRooms(){
            this.beddingService
            .listofRooms()
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log(response['data'])
                    this.bedding = response['data']
                    //this.loadRooms()
                    this.addintoavailability()
                  }else{
                    console.log(response['error'])
                  }
            })
        }

        onDelete(bedid: number) {
            this.beddingService
              .deleteRoom(bedid)
              .subscribe(response => {
                if (response['status'] == 'success') {
                  toastr.success('room deleted')
                  this.loadRooms()
                } else {
                  console.log(response['error'])
                }
              })
          }

          addintoavailability(){
            this.beddingService
            .addRooms(this.roomcategory,this.beddingcategory,this.roomcategoryid,this.beddingcategoryid,this.bookid)
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log(response['data availability'])
                    this.bedding = response['data']
                    //this.loadRooms()
                    
                  }else{
                    console.log(response['error in availability'])
                  }
            })
          }
}