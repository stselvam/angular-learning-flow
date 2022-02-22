import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-form-with-validationsexplicit',
  templateUrl: './demo-form-with-validationsexplicit.component.html',
  styleUrls: ['./demo-form-with-validationsexplicit.component.css']
})
export class DemoFormWithValidationsexplicitComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required],
      pname: ['', Validators.pattern("[a-zA-Z ]*")]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(value: String): void {
    console.log("Submitted value in Reactive form: ", value)
  }
}
