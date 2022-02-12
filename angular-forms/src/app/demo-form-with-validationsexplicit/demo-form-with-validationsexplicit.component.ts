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
  pname: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required],
      pname: ['', Validators.pattern("[a-zA-Z ]*")]
    })
    this.sku = this.myForm.controls["sku"];
    this.pname = this.myForm.controls["pname"];
  }

  ngOnInit(): void {
  }

  onSubmit(value: String): void {
    console.log("Submitted value in Reactive form: ", value)
  }
}
