import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signinup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class AuthenticationModule { }
