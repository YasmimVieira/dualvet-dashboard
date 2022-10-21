import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GraphComponent } from '../../components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { SkeletonComponent } from '../../components/skeleton/skeleton.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ProductListComponent,
    GraphComponent,
    SpinnerComponent,
    SkeletonComponent,
    CardsComponent,
    ButtonComponent,
    EditProductComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule { }
