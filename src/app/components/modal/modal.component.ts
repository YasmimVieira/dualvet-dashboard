import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ButtonInformations } from 'src/app/enum/button-informations.enum';
import { ButtonInterface } from 'src/app/interfaces/button.interface';
import { Modal } from 'src/app/interfaces/modal.interface';
import { Products } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input() modalInformations!: Modal;
  @Output() newEvent = new EventEmitter<string>();

  showModal = false;

  public toggle(): void {
    this.showModal = !this.showModal;
  }

  public closeModal(): void {
    this.renderer.addClass(this.el, 'modal__removed')
  }

  public addNewItem() {
    this.newEvent.emit();
  }
}
