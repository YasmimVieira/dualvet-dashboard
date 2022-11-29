import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ButtonInformations } from 'src/app/enum/button-informations.enum';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { ToastMessage } from 'src/app/enum/toast-messages.enum';
import { ButtonInterface } from 'src/app/interfaces/button.interface';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public authenticationForm!: FormGroup;
  public buttonInformations!: ButtonInterface; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.authenticationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.buttonInformations = {
      buttonTitle: ButtonInformations.ENTER_BUTTON,
      buttonType: ButtonInformations.BUTTON_SUBMIT,
      buttonSpinner: false,
      buttonFormValidate: this.authenticationForm.invalid
    }
  }

  public submitLogin(): void {
    this.buttonInformations.buttonSpinner = true;
    this.authenticationService.loginUser(this.authenticationForm.value)
    .subscribe({
      next: () => {
        this.buttonInformations.buttonSpinner = false;
        this.toastr.success(ToastMessage.TOAST_LOGIN, ToastMessage.TOAST_SUCCESS_TITLE);
        this.router.navigate([PageRoutes.PRODUCTS])
        localStorage.setItem('user', JSON.stringify(this.authenticationForm.controls?.['username'].value));
      },
      error: (error) => {
        this.buttonInformations.buttonSpinner = false;
        this.toastr.error(error.error, ToastMessage.TOAST_ERROR_TITLE);
      }
    });
  }
}
