import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products.interface';
import { ResultState } from '../../interfaces/result-state.interface';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}