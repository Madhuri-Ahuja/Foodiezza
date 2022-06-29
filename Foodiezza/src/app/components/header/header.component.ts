import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchItem:string='';
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getfood()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchItem=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchItem);
  }

}
    
