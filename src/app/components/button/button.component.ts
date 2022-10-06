import { Component, Input, OnInit } from '@angular/core';
import { ButtonInterface } from 'src/app/interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonInformations!: ButtonInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
