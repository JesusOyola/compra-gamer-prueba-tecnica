import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/interface/products';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { ProductAmount } from '../../interface/products';
import { SubCategoriesService } from 'src/app/service/sub-categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  listProducts: ProductAmount[];
  urlImage: string =
    'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';

  cartListProducts: Products[] = [];

  valueToSearch: string;
  idFromCategories: number;

  subscription: Subscription;
  localStorageLength: number = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private subCategoriesService: SubCategoriesService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();

    this.onFilterCategorieChange();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log(data);

        this.listProducts = data;
      },
    });
  }

  addToCart(product: ProductAmount, i: number) {
    this.cartService.addNewProduct(product);
    if (product.cantidad) {
      product.cantidad = product.cantidad + 1;
    } else {
      product.cantidad = 1;
    }

    this.cartService.products.subscribe({
      next: (products) => {
        localStorage.setItem('carrito', JSON.stringify(products));
        /* this.cartListProducts = products; */
      },
    });
  }

  onFilterCategorieChange() {
    this.subscription =
      this.subCategoriesService.searchCategorieValue.subscribe(
        (value: number) => {
          console.log(value);
          this.idFromCategories = value;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


