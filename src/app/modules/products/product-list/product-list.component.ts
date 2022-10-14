import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonInformations } from 'src/app/enum/button-informations.enum';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { ToastMessage } from 'src/app/enum/toast-messages.enum';
import { ButtonInterface } from 'src/app/interfaces/button.interface';
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
  public productDelete!: Products;
  public getProduct!: Products[];
  public result!: ResultState;
  public isAvailable = false;
  
  constructor(
    private productService: ProductsService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  /**
   * Lista todos produtos
   */
  private getProductList(): void {
    this.isAvailable = true;

    this.productService.getProducts()
      .subscribe({
        next: (resp) => {
          this.product = resp
          console.log(resp)
          this.product.map(item => console.log(item.id))
        },
        error: (error) => this.result = error
      })
  }

  public deleteProduct(): void {
    this.productService.deleteProduct(this.productDelete.id = '')
    .subscribe({
      next: () => {
        this.router.navigate([PageRoutes.PRODUCT_LIST]);
        this.toastrService.success(ToastMessage.TOAST_PRODUCT_DELETE, ToastMessage.TOAST_SUCCESS_TITLE);
      },
      error: (error) => console.error(error)
    }
    )
  }
}
