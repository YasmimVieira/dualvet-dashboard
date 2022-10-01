import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: PageRoutes.PRODUCTS_CREATE, component: CreateProductComponent },
    { path: PageRoutes.PRODUCT_LIST, component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
