import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [
    NgIf
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone:true
})
export class Product implements OnInit{
  //products!:Array<any>;
  //products:Array<any>=[];

  products:any;
  constructor() {
  }

  ngOnInit(): void {
    this.products=[
      {id:1,name:"Computer",price:2300,selected:true},
      {id:2,name:"Printer",price:1220,selected:false},
      {id:3,name:"Smart Phone",price:3000,selected:true},
    ]

    }


  handeleDelete(product: any) {
    let v=confirm("voulez vous supprimer?");
    if(v==true){
      this.products=this.products.filter((p:any)  =>p.id!=product.id);

    }

  }
}
