import { Component, Input, OnInit } from '@angular/core';
import { Modal } from 'src/app/interfaces/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalInformations!: Modal;

  constructor() { }

  ngOnInit(): void {
  }

}
