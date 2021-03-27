import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
import {PaymentService} from '../payment/payment.service'
import {BookingService} from '../Booking/book.service'

@Component({
    selector: 'payment-componentcopy',
    templateUrl:'./payment.componentcopy.html',
    styleUrls:['./payment.componentcopy.css']
})

export class PaymentcopyComponent{

    book=[]

    bookid=0
    billingmode=''
    amount=0
    billingdate=''
    status=''

    email=''

    constructor(private router: Router,
        private paymentService:PaymentService,
        private bookingService:BookingService){}

        onPay(){
            this.paymentService
             .pay( this.bookid,this.billingmode, this.amount,this.billingdate, this.status)
                 .subscribe(response=>{
                     console.log(response)
                     if (response['status'] == 'success') {
                         this.userbook()
                         toastr.success("Payment Successful")
                         this.router.navigate(['/website-component'])
                       } else {
    
                       }
                 })
    
        }

        userbook(){
            this.paymentService
            .user(this.bookid, this.email)
            .subscribe(response=>{
                console.log(response)
                if(response['status']=='success'){
                    console.log('bookid inserted')
                }
            })
        }

        onGetid(){
            this.bookingService
        .getId()
        .subscribe(response=>{
            if(response['status']=='success'){
                this.book=response['data']
                this.bookid=this.book[0].bookid
                toastr.success("ur bookid is"+ this.bookid)
                this.router.navigate(['/payment-component'])
                console.log(this.bookid)

            }else{
                console.log(response['error'])
            }
        })
        }

}

   