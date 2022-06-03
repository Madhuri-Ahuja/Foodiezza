import { APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { Component, EventEmitter, Input , OnInit , Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
}