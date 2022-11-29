import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ButtonInterface } from 'src/app/interfaces/button.interface';

import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let toastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    toastr = TestBed.inject(ToastrService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should check how many inputs the form have", () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#productForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it("should check initial form values", () => {
    const loginFormGroup = component.productForm;
    const loginFormValues = {
      productName: '',
      productDescription: '',
      productPrice: ''
    };
    
    expect(loginFormGroup.value).toEqual(loginFormValues);
  })
});
