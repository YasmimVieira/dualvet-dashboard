import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GraphComponent } from '../components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ProductListComponent,
    GraphComponent
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgChartsModule
  ]
})
export class ProductsModule { }
