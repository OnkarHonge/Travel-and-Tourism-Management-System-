import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';
import {RoomCategoryService} from '../availablerooms/roomcategory.service';

@Component({
    selector: 'availablerooms-component',
    templateUrl:'./availablerooms.component.html',
    styleUrls:['./availablerooms.component.css']
})

export class AvailableroomsComponent{
   
    categories=[]

    constructor(private router: Router,
        private panelService:PanelService,
        private categoryService:RoomCategoryService){
            this.loadCategories()
        }
        loadCategories(){
            this.categoryService
            .countCategory()
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log(response['data'])
                    this.categories = response['data']
                  }else{
                    console.log(response['error'])
                  }
            })
            
        }

        load1Categories(){
            this.categoryService
            .getCategory()
            .subscribe(response => {
                if (response['status'] == 'success') {
                    console.log(response['data'])
                    this.categories = response['data']
                  }else{
                    console.log(response['error'])
                  }
            })
            
        }

        onAddCategory() {
            this.router.navigate(['/roomcategory-component'])
          }
          onAddRoom() {
            this.router.navigate(['/addroom-component'])
          }

          onBack() {
            this.router.navigate(['/panel-component'])
          }

          onDelete(categoryid: number) {
            this.categoryService
              .deleteCategory(categoryid)
              .subscribe(response => {
                if (response['status'] == 'success') {
                  this.load1Categories()
                } else {
                  console.log(response['error'])
                }
              })
          }
}