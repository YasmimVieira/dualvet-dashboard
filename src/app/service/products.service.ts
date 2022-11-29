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

  /**
   * Lista todos produtos
   * @returns 
   */
  public getProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.API);
  }

  /**
   * Cria um novo produto
   * @param productInformation 
   * @returns 
   */
  public setNewProduct(productInformation: Products): Observable<Products> {
    return this.httpClient.post<Products>(this.API, productInformation);
  }

  /**
   * Edita um produto
   * @param productInformation 
   * @returns 
   */
  public editProduct(productInformation: Products): Observable<Products> {
    return this.httpClient.put<Products>(`${this.API}/${productInformation._id}`, productInformation);
  }

  /**
   * Exclui um produto
   * @param id 
   * @returns 
   */
  public deleteProduct(id: string): Observable<Products> {
    return this.httpClient.delete<Products>(`${this.API}/${id}`);
  }

  /**
   * Pega o id do produto
   * @param id 
   * @returns 
   */
  public findById(id: string): Observable<Products> {
    return this.httpClient.get<Products>(`${this.API}/${id}`);
  }
}
