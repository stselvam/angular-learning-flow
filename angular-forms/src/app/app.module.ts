import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithValidationsexplicitComponent } from './demo-form-with-validationsexplicit/demo-form-with-validationsexplicit.component';
import { DemoFormWithValidationsexplicitComponentNoAbstract } from './demo-form-with-validationsexplicit-noabstract/demo-form-with-validationsexplicit.component';
import { DemoFormWithCustomvalidation } from './demo-form-with-customvalidation.component/demo-form-with-customvalidation.component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationsexplicitComponent,
    DemoFormWithValidationsexplicitComponentNoAbstract,
    DemoFormWithCustomvalidation.ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
