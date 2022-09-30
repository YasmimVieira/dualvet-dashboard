import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { AuthenticationComponent } from './authentication.component';
import { SigninupComponent } from './signinup/signinup.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: PageRoutes.SIGNUP, component: SigninupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
