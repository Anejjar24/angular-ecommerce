import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ProductService} from '../services/product.service';

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
  constructor(private productService:ProductService  ) {
  }

  ngOnInit(): void {
       this.products=this.productService.getAllProducts();
    }


    getAllProducts(){
        this.products=this.productService.getAllProducts();
    }

  handeleDelete(product: any) {
    let v=confirm("voulez vous supprimer?");
    if(v==true){
this.productService.deleteProduct(product);
this.getAllProducts();
    }

  }
}
