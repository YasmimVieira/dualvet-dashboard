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
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.scss']
})
export class SignupComponent implements OnInit {

  public authenticationForm: FormGroup;
  public buttonInformations: ButtonInterface; 

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.authenticationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.buttonInformations = {
      buttonTitle: ButtonInformations.ENTER_BUTTON,
      buttonType: ButtonInformations.BUTTON_SUBMIT,
      buttonSpinner: false,
      buttonFormValidate: this.authenticationForm.invalid
    }
  }

  public createUser(): void {
    this.buttonInformations.buttonSpinner = true;
    console.log(this.authenticationForm.value)

    this.authService.createUser(this.authenticationForm.value)
    .subscribe({
      next: () => {
        this.buttonInformations.buttonSpinner = false;
        this.toastr.success(ToastMessage.TOAST_LOGIN, ToastMessage.TOAST_SUCCESS_TITLE);
        this.router.navigate([PageRoutes.PRODUCTS])
        localStorage.setItem('user', JSON.stringify(this.authenticationForm.controls?.['userName'].value));
      },
      error: (error) => {
        this.buttonInformations.buttonSpinner = false;
        this.toastr.error('Tente novamente!', ToastMessage.TOAST_ERROR_TITLE);
        console.log(error.error)
      }
    })
  }

}
