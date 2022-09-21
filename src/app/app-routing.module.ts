import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from './enum/page-routes.enum';

const routes: Routes = [
  { path: '', redirectTo: PageRoutes.PRODUCTS_ROUTER, pathMatch: 'full' },
  { 
    path: PageRoutes.PRODUCTS_ROUTER, loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
