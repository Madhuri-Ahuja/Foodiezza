import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public foodList : Category[] = [];
  public grandTotal ! : number ;
  public foodItem:any ;
  public foodQuantity !:number;
  public foodTotal !:number;    

  constructor(private cartService:CartService) { }
  ngOnInit(): void {
    this.cartService.getfood().subscribe(res=>{
      this.foodList = res;
      this.grandTotal=this.cartService.getTotalPrice();
      console.log("total is"+ this.grandTotal);
    })
  }
  removeItem(item:any){    
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  // addtocart(){
    
  // }
  increaseQuantity(item:any,foodQuantity:number){
    for(let i=0;i<this.foodList.length;i++)
    {
      if(this.foodList[i].foodId === item.foodId){
      this.foodList[i].foodQuantity =foodQuantity+1             
    }
      
     }  
     this.grandTotal=this.cartService.getTotalPrice();    
    }
    decreaseQuantity(item:any,foodQuantity:number){
      for(let i=0;i<this.foodList.length;i++)
      {
        if(this.foodList[i].foodId === item.foodId ){
          if(foodQuantity !=1)
             this.foodList[i].foodQuantity = foodQuantity-1 
      }    
           
      }  
      this.grandTotal=this.cartService.getTotalPrice();  
    } 
}
