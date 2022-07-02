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

deleteProduct(product_id : number)
{
//   this.productService.deleteProduct(product_id)
//   .subscribe({
//     next:(res)=>{
//       alert("Product deleted successfully")
//     },
//     error:()=>{
//       alert("error while deleting the product")
//     }
//   })
// }
// 
}
}
