import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  @Input() Cwidth!: string;
  @Input() Cheigth!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public getMyStyles(): object {
    const myStyles = {
      'width.px': this.Cwidth ? this.Cwidth : '',
      'height.px': this.Cheigth ? this.Cheigth : ''
    };

    return myStyles;
  }
}
