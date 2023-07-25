import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interface/products';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Products[], id: number): Products[] {
    if (id === 0) {
      return products;
    }

    const filteredProducts = products.filter(
      (product) => product.id_subcategoria === id
    );

    return filteredProducts;
  }
}
