import { Component, OnInit } from '@angular/core';
import { PanelService } from '../panel.service';
import { Router } from '@angular/router';
import { PaymentService} from '../payment/payment.service'

@Component({
    selector: 'payment-component',
    templateUrl:'./payment.component.html',
    styleUrls:['./payment.component.css']
})

export class PaymentComponent{
   
    Payment=[]

    book=[]

    email=''
    bookid=0
    bedid=0
    billingno=0
    amount=0
    billingdate=0
    status=''

    constructor(private router: Router,
        private panelService:PanelService,
        private paymentService:PaymentService){ this.loadPayment()}
        
    loadPayment(){
        this.onGetid()
        this.paymentService
        .getPayment()
        .subscribe(response => {
            if (response['status'] == 'success') {
                console.log(response['data'])
                this.Payment = response['data']
                }else{
                console.log(response['error'])
                }
        })
        
    }

    onGetid(){
        this.insertBookid()
        this.paymentService
    .getId()
    .subscribe(response=>{
        if(response['status']=='success'){
            this.book=response['data']
            this.bookid=this.book[0].bookid
            console.log(this.bookid)

        }else{
            console.log(response['error'])
        }
    })
    }

    insertBookid()
    {
        this.paymentService
        .insertBookid(this.bookid)
        .subscribe(response=>{
            if(response['status']=='success'){
                this.book=response['data']
                this.bookid=this.book[0].bookid
                console.log(this.bookid)

            }else{
                console.log(response['error'])
            }
        })
    }

    Back(){
        this.router.navigate(['/panel-component'])
    }
}