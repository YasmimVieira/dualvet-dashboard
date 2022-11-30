import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { GraphComponent } from '../../components/graph/graph.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonComponent } from '../../components/skeleton/skeleton.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ProductListComponent,
    GraphComponent,
    SkeletonComponent,
    CardsComponent,
    EditProductComponent,
    ModalComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule { }
