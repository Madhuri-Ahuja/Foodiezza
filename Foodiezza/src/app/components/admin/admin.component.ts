import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';
import { Category } from 'src/app/shared/category';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  specialsResult:Category[]=[];
  public totalFood:number=0;
  public p:any;
  constructor(private categoryService : CategoryService, private cartService:CartService) { }

  ngOnInit(): void {
    this.categoryService.getData().subscribe((data:Category[]) =>{
      this.cartService.getfood()
      .subscribe(res=>{
      this.totalFood = res.length;
    })
          console.log(data);
          this.specialsResult = data;
  })
  this.loadData();
  }
  loadData(){
    this.categoryService.getData().subscribe(specialsResult =>{
      this.specialsResult=specialsResult;
    });
  }
  delete(specialsResult : Category)
  {
    this.categoryService.deleteFood(<number>specialsResult.foodId);
    this.loadData;
    alert("Food item deletd succcessfully!");
  }
  editProduct(fd : Category)
{
  // this.dialog.open(DialogComponent,{
  //   width: '30%',
  //   data: dt
  // }).afterClosed().subscribe(val => {
  //   if(val === 'update')
  //   {
  //     this.productService.getData();
  //   }
  // })
}

deleteFood(category:Category)
{
  let id : number = 0;
  if(category.foodId == undefined){

  }else{
    id=category.foodId;
  }
  this.categoryService.deleteFood(id);
}
}

