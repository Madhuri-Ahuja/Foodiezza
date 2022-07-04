import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { CartService } from 'src/services/cart.service';
import { CategoryService } from 'src/services/category.service';
import { WishlistCartService } from 'src/services/wishlist-cart.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public p:any;
  wishlistArray:Category[]=[]; 

  constructor(private wishlistCartService : WishlistCartService , private cartService:CartService, private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.wishlistCartService.getProducts().subscribe((wishListData:Category[]) =>{
      console.log(wishListData);
      this.wishlistArray = wishListData;
    });    
}
addToCart(dt:Category){
       this.cartService.addtoCart(dt);
  }

  addToWishlistCart(dt:Category){
    this.wishlistCartService.addToWishlistCart(dt);
  }

removeCart(dt:Category){
  this.wishlistCartService.removeWishlistCartItem(dt)
}

updateBool(product:Category){
  
  product.addedToWishList=!product.addedToWishList;
       this.categoryService.updateBoolean(product);
 }
}
