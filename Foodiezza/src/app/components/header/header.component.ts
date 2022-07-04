import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/app/shared/category';
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchItem:string='';
  public category: [] = [];

  
   
  constructor(private cartService:CartService , private categoryService:CategoryService,private _router: Router) { }

  ngOnInit(): void {
    this.cartService.getfood()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){    
    this._router.navigate(['our-specials'])
    this.searchItem=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchItem);      
  }
  filter(event:any){    
  
    this._router.navigate(['our-specials'])
    //this.searchItem=(event.target as HTMLInputElement).value;
    
    this.cartService.category.next(event);      
  }
  
  
}
    
