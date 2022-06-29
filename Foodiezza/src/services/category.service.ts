import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Category} from '../app/shared/category';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http:HttpClient) { }

  getData():Observable<Category[]>{
    let url="https://localhost:5001/api/foodinfo";
    console.log("in service");
    return this.http.get<Category[]>(url);
    
  }
}
