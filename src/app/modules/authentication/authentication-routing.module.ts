import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './signup/signinup.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: PageRoutes.SIGNUP, component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
