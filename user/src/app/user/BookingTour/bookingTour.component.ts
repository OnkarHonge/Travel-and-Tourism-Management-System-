import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import * as toastr from 'toastr';
import { Router } from '@angular/router';
import {BookingTourService} from '../BookingTour/bookTour.service'

@Component({
    selector: 'book-tour-component',
    templateUrl: './bookingTour.component.html',
    styleUrls: ['./bookingTour.component.css']
})
export class BookingTourComponent{

    book=[]

    destination=[]

    room=[]

    destinationid=0
    packagetype=''

    bookid=0

    constructor(private router: Router,
        private bookingTourService:BookingTourService){
            this.bookingTourService
            .getDestination()
            .subscribe(response=>{
                if(response['status']=='success'){
                    this.destination=response['data']
                    this.destinationid=this.destination[0].destinationid
                }else{
                    console.log(response['error'])
                }
            })
    }
    onBookTour(){

        // toastr.error('This functionality does\'t exist yet. Sorry for the inconvenience.')

        this.bookingTourService
         .book( this.destinationid, this.packagetype)
             .subscribe(response=>{
                 console.log(response)
                 if (response['status'] == 'success') {
                     toastr.success("data inserted successfully")
                    //  this.getId()
                     this.router.navigate(['/payment-component'])
                   } else {

                   }
             })

    }

    // getId(){
    //     this.bookingTourService
    //     .getId()
    //     .subscribe(response=>{
    //         if(response['status']=='success'){
    //             this.book=response['data']
    //             this.bookid=this.book[0].bookid
    //             toastr.success("ur bookid is"+ this.bookid)
                
    //             console.log(this.bookid)

    //         }else{
    //             console.log(response['error'])
    //         }
    //     })
    // }
}
        
