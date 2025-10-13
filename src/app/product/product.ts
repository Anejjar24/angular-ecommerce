import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone:true
})
export class Product {
  products=[
    {id:1,name:"Computer",price:2300,selected:true},
    {id:2,name:"Printer",price:1220,selected:false},
    {id:3,name:"Smart Phone",price:3000,selected:true},
  ]
}
