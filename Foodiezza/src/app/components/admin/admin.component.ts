import { Component, OnInit } from '@angular/core';
import { FoodDetailsService } from 'src/services/food-details.service';
import { IFood } from 'src/app/shared/IFood';
import { CartService } from 'src/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  specialsResult:IFood[]=[];
  public totalFood:number=0;
  public p:any;
  constructor(private foodDetailsService : FoodDetailsService,private cartService:CartService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.foodDetailsService.getFood().subscribe((data:IFood[]) =>{
      this.cartService.getFood()
      .subscribe(res=>{
      this.totalFood = res.length;
    })
          console.log(data);
          this.specialsResult = data;
  })
  this.loadData();
  }
  loadData(){
    this.foodDetailsService.getFood().subscribe(specialsResult =>{
      this.specialsResult=specialsResult;
    });
  }
  editProduct(fd : IFood){
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

deleteFood(food: IFood)
{
  let id : number = 0;
  if(food.foodId == undefined){

  }else{
    id=food.foodId;
  }
  this.foodDetailsService.deleteFood(id);
  this.toastr.info(`${food.foodName}`,' Deleted ');
  this.loadData;  

}
}

