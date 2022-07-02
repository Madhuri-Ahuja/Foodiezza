import { APP_BOOTSTRAP_LISTENER, HostListener } from '@angular/core';
import { Component, EventEmitter, Input , OnInit , Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Category } from 'src/app/shared/category';
import { CartService } from 'src/services/cart.service';

declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public foodList : Category[] = [];
  public grandTotal ! : number ;
  constructor(private cartService:CartService) { 
    
  }

  ngOnInit(): void {
    this.cartService.getfood().subscribe(res=>{
      this.foodList = res;
      this.grandTotal=this.cartService.getTotalPrice();
     })
  }
  
message:any;
paymentId = "";
error = "";
title1 = 'razorpay-intergration';
options = {
  "key": "rzp_test_KMuAYKn5Hl8vDL",
  "amount": 300,
  "name": "Madhuri Ahuja",
  "description": "Payment Details",
  "image": "/assets/images/fav.png",
  "order_id": "",
  "handler": function (response: any) {
    var event = new CustomEvent("payment.success",
      {
        detail: response,
        bubbles: true,
        cancelable: true
      }
    );
    window.dispatchEvent(event);
  },
  "prefill": {
    "name": "",
    "email": "",
    "contact": ""
  },
  "notes": {
    "address": ""
  },
  "theme": {
    "color": "#45426c"
  }
};
paynow() {
  this.paymentId = '';
  this.error = '';
  this.options.prefill.name = "Madhu";
  this.options.prefill.email = "ahujamadhu01@gmail.com";
  this.options.prefill.contact = "7038080532";
  var rzp1 = new Razorpay(this.options);
  rzp1.open();
  rzp1.on('payment.failed', function (response: any) {
    //this.message = "Payment Failed";
    // Todo - store this information in the server
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
    //this.error = response.error.reason;
  }
  );
}
@HostListener('window:payment.success', ['$event'])
onPaymentSuccess(event: any): void {
  this.message = "Success Payment";
}
}