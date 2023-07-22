import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listProducts:Products;

  constructor(private readonly productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe({
      next:(data)=>{
        console.log(data)
         this.listProducts = data; 
      }
    })
  }

}


/* Para las imágenes la url es esta
a la documentación le falta explicar que sin compragamer_Imganen_general_ no funciona.
`https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_${nombre de la imagen}`

*/