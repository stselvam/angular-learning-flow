import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-form-with-validationsexplicit',
  templateUrl: './demo-form-with-validationsexplicit.component.html',
  styleUrls: ['./demo-form-with-validationsexplicit.component.css']
})
export class DemoFormWithValidationsexplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required]
    })
    this.sku = this.myForm.controls["sku"];
  }

  ngOnInit(): void {
  }

  onSubmit(value: String): void {
    console.log("Submitted value in Reactive form: ", value)
  }
}
