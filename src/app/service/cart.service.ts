import { Injectable } from '@angular/core';
import { Products } from '../interface/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts:Products[] = [];

  private products$: BehaviorSubject<Products[]>;

  

  constructor() { 
    this.products$ = new BehaviorSubject<Products[]>([]);
  }

  get products(){
    return this.products$.asObservable();
  }

  addNewProduct(product:Products){
    this.cartProducts.push(product);
    this.products$.next(this.cartProducts);
  }
}
