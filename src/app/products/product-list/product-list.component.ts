import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products.interface';
import { ResultState } from 'src/app/interfaces/result-state.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public product!: Products[];
  public result!: ResultState;
  
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductList();
  }


  /**
   * Lista todos produtos
   */
  private getProductList() {
    this.productService.getProducts()
      .subscribe({
        next: (resp) => this.product = resp,
        error: (error) => this.result = error
      })
  }
}
