import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-form-with-customvalidation',
  templateUrl: './demo-form-with-customvalidation.component.html',
  styleUrls: ['./demo-form-with-customvalidation.component.css']
})
export class DemoFormWithCustomvalidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  pname: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.compose([
        Validators.required,
        skuValidator
      ])],
      pname: ['', Validators.pattern("[a-zA-Z ]*")]
    })
    type skuValidatorReturn  = {
      invalidSku: boolean
    }
    this.sku = this.myForm.controls["sku"];
    this.pname = this.myForm.controls["pname"];
    function skuValidator(control: FormControl): skuValidatorReturn {
      if(!control.value.match('/^123/')) {
        return {invalidSku: true};
      }
    }
  }

  ngOnInit(): void {
  }

  onSubmit(value: String): void {
    console.log("Submitted value in Reactive form: ", value)
  }
}
