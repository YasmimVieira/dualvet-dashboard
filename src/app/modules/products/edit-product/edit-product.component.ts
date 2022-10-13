import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public product!: Products;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductById();
  }

  /**
   * Resgata o id do produto
   */
  private getProductById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.findById(parseInt(id!))
    .subscribe (
      (success) => this.product = success
    )
  }
}
