import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonInformations } from 'src/app/enum/button-informations.enum';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { PageTitle } from 'src/app/enum/page-title.enum';
import { ToastMessage } from 'src/app/enum/toast-messages.enum';
import { ButtonInterface } from 'src/app/interfaces/button.interface';
import { Modal } from 'src/app/interfaces/modal.interface';
import { Products } from 'src/app/interfaces/products.interface';
import { ResultState } from 'src/app/interfaces/result-state.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products!: Products[];
  public productDelete!: Products;
  public getProduct!: Products;
  public result!: ResultState;
  public isAvailable = false;
  public modalInfoObj: Modal = {
    title: PageTitle.MODAL_DELETE_PRODUCT,
    bodyTitle: PageTitle.MODAL_DELETE_PRODUCT_DESCRIPTION,
    buttonTitle: ButtonInformations.DELETE_PRODUCT_TITLE,
    buttonColor: "red"
  }

  constructor(
    private productService: ProductsService,
    private toastrService: ToastrService,
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
        next: (resp) => this.products = resp,
        error: (error) => this.result = error
      })
  }

  public deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
    .subscribe({
      next: (resp) => {
        this.getProductList()
        this.toastrService.success(ToastMessage.TOAST_PRODUCT_DELETE, ToastMessage.TOAST_SUCCESS_TITLE);
        console.log(resp)
      },
      error: (error) => console.error(error)
    })
  }
}
