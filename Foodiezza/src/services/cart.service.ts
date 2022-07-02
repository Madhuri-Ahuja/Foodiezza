import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/shared/category';

 @Injectable({
   providedIn: 'root'
 })
 export class CartService {

   public cartItemList:Category[]=[];
   public foodList=new BehaviorSubject<any>([]);
   public search=new BehaviorSubject<any>("");
  

   constructor(private toastr:ToastrService) { }

   getfood(){
    return this.foodList.asObservable();
   }

  setfood(product:any){
     this.cartItemList.push(...product);
     this.foodList.next(product);
   }
   addtoCart(product:any)
   {
    const itemIndex = this.cartItemList.findIndex(item => item.foodId === product.foodId);
    if (itemIndex === -1) {
    this.cartItemList.push(product);   
    this.toastr.success(`${product.foodName}`,' added to Bag');   
    }
    else {
         this.cartItemList[itemIndex].foodQuantity = this.cartItemList[itemIndex].foodQuantity + product.foodQuantity;
    }
    this.foodList.next(this.cartItemList.slice(0));
    this.getTotalPrice();
   }
  //  addtoCart(product:any){
  //    this.cartItemList.push(product);
  //    this.foodList.next(this.cartItemList);
  //    this.getTotalPrice();
  //    console.log(this.cartItemList);
  // }

   getTotalPrice():number {
     let grandTotal=0;
     this.cartItemList.map((a:any) =>{
      grandTotal += Number(a.price * a.foodQuantity)})  
      console.log(grandTotal);
      return grandTotal;
 }
   removeCartItem(product:Category){     
     this.cartItemList.map((a:any,index:any)=>{
       if(product.foodId==a.foodId){
       this.cartItemList.splice(index,1)
    }
     })
     this.foodList.next(this.cartItemList);
   }
  removeAllCart(){
    this.cartItemList=[];
    this.foodList.next(this.cartItemList);
   }
  }
