import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
import {PaymentService} from '../payment/payment.service'
import {BookingService} from '../Booking/book.service'

@Component({
    selector: 'payment-component',
    templateUrl:'./payment.component.html',
    styleUrls:['./payment.component.css']
})

export class PaymentComponent{

    book=[]

    bookingDetails=[]
    beddingType=''
    roomType=''

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
            this.status = 'paid'
            
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
                    
                    console.log(this.bookid)

                }else{
                    console.log(response['error'])
                }
            })
        }

        onGetAmount(){
            this.paymentService
            .getAmount(this.bookid)
            .subscribe(response=>{
                if(response['status']=='success'){

                    this.bookingDetails=response['data']               
                    this.beddingType=this.bookingDetails[0].beddingtype 
                    this.roomType=this.bookingDetails[0].category 
                    
                    // console.log('beddingType: '+this.beddingType+'\n'+
                    //             'roomType: '+this.roomType)

                    if(this.beddingType==='Single') {
                        if(this.roomType==='superior') {
                            this.amount = 5000;
                        }
                        else if(this.roomType==='single') {
                            this.amount = 1000;
                        }
                        else if(this.roomType==='deluxe') {
                            this.amount = 2000;
                        }
                        else if(this.roomType==='guest') {
                            this.amount = 3000;
                        }
                        else if(this.roomType==='cottage') {
                            this.amount = 2000;
                        }
                    }
                    else if (this.beddingType==='Double') {
                        if(this.roomType==='superior') {
                            this.amount = 5000*2;
                        }
                        else if(this.roomType==='single') {
                            this.amount = 1000*2;
                        }
                        else if(this.roomType==='deluxe') {
                            this.amount = 2000*2;
                        }
                        else if(this.roomType==='guest') {
                            this.amount = 3000*2;
                        }
                        else if(this.roomType==='cottage') {
                            this.amount = 2000*2;
                        }
                    }
                    else if (this.beddingType==='Triple') {
                        if(this.roomType='superior') {
                            this.amount = 5000*3;
                        }
                        else if(this.roomType==='single') {
                            this.amount = 1000*3;
                        }
                        else if(this.roomType==='deluxe') {
                            this.amount = 2000*3;
                        }
                        else if(this.roomType==='guest') {
                            this.amount = 3000*3;
                        }
                        else if(this.roomType==='cottage') {
                            this.amount = 2000*3;
                        }
                    }
                    else if (this.beddingType==='Quad') {
                        if(this.roomType='superior') {
                            this.amount = 5000*4;
                        }
                        else if(this.roomType==='single') {
                            this.amount = 1000*4;
                        }
                        else if(this.roomType==='deluxe') {
                            this.amount = 2000*4;
                        }
                        else if(this.roomType==='guest') {
                            this.amount = 3000*4;
                        }
                        else if(this.roomType==='cottage') {
                            this.amount = 2000*4;
                        }
                    }
                    


                }else{
                    // console.log(response['error'])
                }
            });
        }

}

   