import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public spinner = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public productForm = this.formBuilder.group({
    productName: ['', Validators.required],
    productDescription: ['', Validators.required],
    productPrice: ['', Validators.required],
  })

  public submitNewProduct(): void {
    this.spinner = true;

    const newProductObj: Products = {
      productName: this.productForm.controls.productName.value!,
      productDescription: this.productForm.controls.productDescription.value!,
      productPrice: this.productForm.controls.productPrice.value!,
    }
    this.productService.setNewProduct(newProductObj)
      .subscribe({
        next: () => {
          this.spinner = false;
          this.toastrService.success('Produto criado com sucesso!', 'Muito bem!')
        },
        error: (error) => error
      })
  }
}
