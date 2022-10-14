import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  showModal = false;
  product = []

  public toggle(productInfo: Products[]): void {
    localStorage.setItem('productSelected', JSON.stringify(productInfo))
    console.log(productInfo)
    this.showModal = !this.showModal;
  }

}
