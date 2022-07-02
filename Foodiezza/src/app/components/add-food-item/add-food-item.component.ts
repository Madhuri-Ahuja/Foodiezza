import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from 'src/app/shared/category';
import { CategoryService } from 'src/services/category.service';


@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {
  foodName:FormControl = new FormControl("");
  price:FormControl = new FormControl("");
  rating:FormControl = new FormControl("");
  category:FormControl = new FormControl("");
  cookTime:FormControl = new FormControl("");
  imageUrl:FormControl = new FormControl("");
  foodQuantity:FormControl = new FormControl("");
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
  }
  save(){
    let food:Category = {
      foodName:this.foodName.value,
      price:parseInt(this.price.value),
      rating:parseInt(this.rating.value),
      category:this.category.value,
      cookTime:this.cookTime.value,
      imageUrl:this.imageUrl.value,
      foodQuantity:parseInt(this.foodQuantity.value)
    };
    this.categoryService.AddFood(food);
  }
}
