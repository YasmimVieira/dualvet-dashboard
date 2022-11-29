import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Products } from '../interfaces/products.interface';

import { ProductsService } from './products.service';

const newProductMock: Products = require("../mocks/newProduct.mock.json");

describe('ProductsService', () => {
  let service: ProductsService;
  let controller: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(ProductsService);
    controller = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create new products", () => {
    service.setNewProduct(newProductMock).subscribe(
      
    )
  })
});
