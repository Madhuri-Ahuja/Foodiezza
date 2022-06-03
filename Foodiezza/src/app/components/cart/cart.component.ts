import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public foodList : any = [];
  public grandTotal ! : number ;
  public foodItem:any;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getfood(this.foodItem).subscribe(res=>{
      this.foodList = res;
      this.grandTotal=this.cartService.getTotalPrice();
      console.log("total is"+this.grandTotal);
    })
  }
  removeItem(item:any){
    
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }
  addtocart(){

  }

}
