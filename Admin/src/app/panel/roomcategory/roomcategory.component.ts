import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RoomCategoryService} from '../availablerooms/roomcategory.service';
import * as toastr from 'toastr';

@Component({
    selector: 'roomcategory-component',
    templateUrl:'./roomcategory.component.html',
    styleUrls:['./roomcategory.component.css']
})

export class RoomCategoryComponent{

    roomcategory=[]

    categoryid=null
    category=''

    thumbnail:any

    constructor(private router:Router,
        private roomCategoryService:RoomCategoryService){
            this.loadRooms()
        }
        onBack() {
            this.router.navigate(['/availablerooms-component'])
    }
    onAddRoomCategory(){
        this.roomCategoryService
        .addCategory(this.categoryid, this.category, this.thumbnail)
            .subscribe(response=>{
                console.log(response)
                if (response['status'] == 'success') {
                    this.loadRooms()
                    toastr.success('category added')
                    //this.router.navigate(['/availablerooms-component'])
                  } else {
                    toastr.error('room id exists, enter another id')
                  }
            })
    }


    loadRooms(){
        this.roomCategoryService
        .getCategory()
        .subscribe(response => {
            if (response['status'] == 'success') {
                console.log(response['data'])
                this.roomcategory = response['data']
                //this.loadRooms()
              }else{
                console.log(response['error'])
              }
        })
    }

}
   