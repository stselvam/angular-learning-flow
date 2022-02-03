import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/vendor/semantic.min.css']
})
export class AppComponent {
  title = 'angular-forms';
  name: string;
  constructor() {
    let nameControl = new FormControl("Nate");
    this.name = nameControl.value; // -> Nate
    // now we can query this control for certain values:
    nameControl.errors // -> StringMap<string, any> of errors
    nameControl.dirty // -> false
    nameControl.valid // -> true
  }
}
