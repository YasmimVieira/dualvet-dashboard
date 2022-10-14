import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() filter!: string;
  @Output() productSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  findProduct(value: string) {
    this.productSearch.emit(value);
  }
}
