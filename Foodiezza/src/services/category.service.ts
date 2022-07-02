import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import{Category} from '../app/shared/category';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private httpClient :HttpClient) { }

  getData():Observable<Category[]>{
    let url="https://localhost:5001/api/foodinfo";
    console.log("in service");
    return this.httpClient.get<Category[]>(url);    
  }
  AddFood(food : Category){
    this.httpClient.post<Category>("https://localhost:5001/api/foodinfo",food, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => console.log("Data entered in Database Successfully !"));
  }
  deleteFood(id:number)
  {
    this.httpClient.delete("https://localhost:5001/api/foodinfo/"+id,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=>console.log("Food Item deleted Successfully"));
  }
}
