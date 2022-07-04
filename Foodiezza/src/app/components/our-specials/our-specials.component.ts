import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/app/shared/category';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { WishlistCartService } from 'src/services/wishlist-cart.service';
@Inject(CategoryService)
@Component({
  selector: 'app-our-specials',
  templateUrl: './our-specials.component.html',
  styleUrls: ['./our-specials.component.css']
})
export class OurSpecialsComponent implements OnInit {
searchKey:string='';
filterKey:string='foodName';
public p:any;



  specialsResult:Category[]=[];
  public foodList : any;
  public filterCategory:boolean=false;
 
  constructor(private cat:CategoryService , private cartService:CartService, private wishlistCartService:WishlistCartService ) { }
  ngOnInit(): void {  
    this.cat.getData().subscribe((data)=>{            
         for(var i=0;i<data.length;i++){
          let item:Category={
            foodId:data[i].foodId,
            foodName:data[i].foodName,
            price:data[i].price,
            rating:data[i].rating,
            category:data[i].category,
            cookTime:data[i].cookTime,
            imageUrl:data[i].imageUrl,
            foodQuantity:data[i].foodQuantity
        };
          this.specialsResult.push(item);    
          this.searchKey='';
          this.filterKey='category';     
    }
  });
//searchKey
this.cartService.search.subscribe((val:string)=>{
  //console.log("hi")
  this.searchKey=val;
  this.filterKey='foodName';
 })
 this.cartService.category.subscribe((val:string)=>{
  //console.log("hello");
  this.searchKey=val;
  this.filterKey='category';
 })
}
  addtocart(item:any){
    this.cartService.addtoCart(item);
  }

  updateBool(product:Category){

    product.addedToWishList=!product.addedToWishList;   
    this.wishlistCartService.addToWishlistCart(product);   
    this.cat.updateBoolean(product);
  }
   
   
 
 
//   refresh(): void {
//     window.location.reload();
// }

}

