import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.API}product`)
    .pipe(
      resp => resp
    )
  }
}
