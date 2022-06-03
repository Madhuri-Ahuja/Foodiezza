import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/app/shared/category';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Inject(CategoryService)
@Component({
  selector: 'app-our-specials',
  templateUrl: './our-specials.component.html',
  styleUrls: ['./our-specials.component.css']
})
export class OurSpecialsComponent implements OnInit {
searchKey:string='';

  specialsResult:Category[]=[];
  public foodList : any;
  constructor(private cat:CategoryService , private cartService:CartService) { }
  ngOnInit(): void {    
    this.cat.getData().subscribe((data)=>{   
         
      console.log("in function", data);
      
         for(var i=0;i<data.length;i++){
          let item:Category={
            food_id:data[i].food_id,
            food_name:data[i].food_name,
            price:data[i].price,
            rating:data[i].rating,
            category:data[i].category,
            cook_time:data[i].cook_time,
            image_url:data[i].image_url
        };
          this.specialsResult.push(item);
          console.log("final array",this.specialsResult);  
      //this.specialsResult=data;
    }
  });
//searchKey
this.cartService.search.subscribe((val:any)=>{
  this.searchKey=val;
})


  }
  addtocart(item:any){
    this.cartService.addtoCart(item);
  }
}

