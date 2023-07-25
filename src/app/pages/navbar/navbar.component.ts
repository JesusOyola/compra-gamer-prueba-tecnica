import { Component, Input, OnInit } from '@angular/core';
import { ProductAmount, Products } from 'src/app/interface/products';
import { SubCategories } from 'src/app/interface/sub-categories';
import { CartService } from 'src/app/service/cart.service';
import { SubCategoriesService } from 'src/app/service/sub-categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  
  filterPost: string = '';
  cartListProducts: Products[];
  subCategoriesList: SubCategories[];
 

  constructor(
    private cartService: CartService,
    private subCategoriesService: SubCategoriesService
  ) {}

  ngOnInit(): void {
    this.addToCart();
    this.getAllSubCategories();
  }

  addToCart() {
    this.cartService.products.subscribe({
      next: (products) => {
        this.cartListProducts = products;
      },
    });
    
  }

  getAllSubCategories() {
    this.subCategoriesService.getSubCategories().subscribe({
      next: (data) => {
        this.subCategoriesList = data;
      },
    });
  }

  clickSearch(id: number) {
    this.subCategoriesService.changeCategorieValue(id);
  }
}
