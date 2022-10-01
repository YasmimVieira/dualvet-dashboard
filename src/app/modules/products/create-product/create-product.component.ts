import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { ToastMessage } from 'src/app/enum/toast-messages.enum';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public spinner = false;
  public productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Constroi o formulario e validacoes
   */
  private buildForm(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
    })
  }

  /**
   * Submit para criar o produto
   */         
  public submitNewProduct(): void {
    this.spinner = true;

    this.productService.setNewProduct(this.productForm.value)
      .subscribe({
        next: () => {
          this.spinner = false
          this.toastrService.success(ToastMessage.TOAST_SUCCESS, ToastMessage.TOAST_SUCCESS_TITLE);
          this.router.navigate([PageRoutes.PRODUCT_LIST])
        },
        error: (error) => {
          this.spinner = false
          this.toastrService.error(error.error, ToastMessage.TOAST_ERROR_TITLE);
        }
      })
  }
}
