import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-image',
  template: `<img class="product-image" [src]="imageUrl">`
})
export class ProductImageComponent implements OnInit {
  @Input() imageUrl: String;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit(): void {
  }

}
