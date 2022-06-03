import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

 @Injectable({
   providedIn: 'root'
 })
 export class CartService {


   public cartItemList:any=[];
   public foodList=new BehaviorSubject<any>([]);
   public search=new BehaviorSubject<any>("");

   constructor() { }

   getfood(product:any){
    return this.foodList.asObservable();
   }

  setfood(product:any){
     this.cartItemList.push(...product);
     this.foodList.next(product);
   }
   addtoCart(product:any){
     this.cartItemList.push(product);
     this.foodList.next(this.cartItemList);
     this.getTotalPrice();
     console.log(this.cartItemList);
   }
   getTotalPrice():number {
     let grandTotal=0;
     this.cartItemList.map((a:any) =>{
      grandTotal += Number(a.price)})  
    return grandTotal;
 }
   removeCartItem(product:any){
     
     this.cartItemList.map((a:any,index:any)=>{
       if(product.food_id==a.food_id){
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