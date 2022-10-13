import { NgModule } from '@angular/core';
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
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

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
    DeleteProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
