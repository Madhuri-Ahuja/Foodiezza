import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 
  getAll():String[]{
    return[
      '/assets/food/food1.jpg',
      '/assets/food/food2.jpg',
      '/assets/food/food3.jpg',
      '/assets/food/food4.jpg',
      '/assets/food/food5.jpg',
      '/assets/food/food6.jpg',
    ]
  }
}
