import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import * as toastr from 'toastr';
import { Router } from '@angular/router';
import {BookingService} from '../Booking/book.service'

@Component({
    selector: 'book-component',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent{

    book=[]

    category=[]

    room=[]

    categoryid=0
    beddingtype=''
    bedid=0

    bookid=0
    check_in_date=''
    check_out_date=''

    constructor(private router: Router,
        private bookingService:BookingService){
            this.bookingService
            .getRoomCategory()
            .subscribe(response=>{
                if(response['status']=='success'){
                    this.category=response['data']
                    this.categoryid=this.category[0].categoryid
                }else{
                    console.log(response['error'])
                }
            })
    }
    onBook(){
        this.bookingService
         .book( this.check_in_date,this.check_out_date, this.categoryid,this.beddingtype, this.bedid)
             .subscribe(response=>{
                 console.log(response)
                 if (response['status'] == 'success') {
                     //toastr.success("data inserted successfully")
                     this.getId()
                     this.router.navigate(['/payment-component'])
                   } else {

                   }
             })

    }
    getId(){
        this.bookingService
        .getId()
        .subscribe(response=>{
            if(response['status']=='success'){
                this.book=response['data']
                this.bookid=this.book[0].bookid
                toastr.success("ur bookid is"+ this.bookid)
                
                console.log(this.bookid)

            }else{
                console.log(response['error'])
            }
        })
    }
}
        
