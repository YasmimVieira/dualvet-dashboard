import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GraphComponent } from '../components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../components/spinner/spinner.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ProductListComponent,
    GraphComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
