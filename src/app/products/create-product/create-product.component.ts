import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  public productForm = this.formBuilder.group({
    productName: ['', Validators.required],
    productDescription: ['', Validators.required],
    productPrice: ['', Validators.required],
  })

  public submitNewProduct(): void {
    const newProductObj: Products = {
      productName: this.productForm.controls.productName.value!,
      productDescription: this.productForm.controls.productDescription.value!,
      productPrice: this.productForm.controls.productPrice.value!,
    }
    this.productService.setNewProduct(newProductObj)
      .subscribe({
        next: (resp) => console.log("enviei", resp),
        error: (error) => error
      })
  }
}
