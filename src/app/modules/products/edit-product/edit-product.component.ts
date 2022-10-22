import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonInformations } from 'src/app/enum/button-informations.enum';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { ButtonInterface } from 'src/app/interfaces/button.interface';
import { Products } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public productId!: string;
  public product!: Products;
  public editProductForm!: FormGroup;
  public buttonInformations!: ButtonInterface;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getProductById();
  }

  /**
   * Resgata o id do produto
   */
  private getProductById(): void {
    this.route.params.subscribe(
      params => this.productId = params['id']
    );
    this.productService.findById(this.productId)
    .subscribe(
      resp => {
        this.product = resp
        this.buildForm();
      }
    )
  }



  public cancelEdit(): void {
    this.router.navigate([PageRoutes.PRODUCT_LIST])
  }

  private buildForm(): void {
    this.editProductForm = this.formBuilder.group({
      _id: [this.productId],
      productName: [this.product.productName, Validators.required],
      productDescription: [this.product.productDescription, Validators.required],
      productPrice: [this.product.productPrice, Validators.required],
    });
    this.buttonInformations = {
      buttonTitle: ButtonInformations.EDIT_PRODUCT_TITLE,
      buttonType: ButtonInformations.BUTTON_SUBMIT,
      buttonSpinner: false,
      buttonFormValidate: this.editProductForm.invalid
    }
  }

  public editProduct(): void {
    console.log(this.editProductForm.value)
    this.buttonInformations.buttonSpinner = true;
    this.productService.editProduct(this.editProductForm.value)
    .subscribe(
      () => {
        this.toast.success('Parabens', 'PRoduto editado')
        this.router.navigate([PageRoutes.PRODUCT_LIST])
      }
    )
  }
}
