import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from './enum/page-routes.enum';

const routes: Routes = [
  { path: '', redirectTo: PageRoutes.PRODUCTS, pathMatch: 'full' },
  { 
    path: PageRoutes.PRODUCTS, loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  { path: PageRoutes.AUTHENTICATION, loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
