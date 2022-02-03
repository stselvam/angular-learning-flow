import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ["XYZ123"]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(value: String): void {
    console.log("Submitted value in Reactive form: ", value)
  }
}