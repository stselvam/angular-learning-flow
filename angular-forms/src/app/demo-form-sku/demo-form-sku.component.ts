import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(val: any) {
    console.log("Submitted value in Declarative form: ", val)
  }

}
