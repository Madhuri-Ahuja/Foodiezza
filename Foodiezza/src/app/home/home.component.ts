import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/services/food.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:String[] = [];

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.foods=this.foodService.getAll();
  }

}
