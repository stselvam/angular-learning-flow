import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-row/product-image/product-image.component';
import { ProductDepartmentComponent } from './product-row/product-department/product-department.component';
import { PriceDisplayComponent } from './product-row/price-display/price-display.component';
import { PageNavComponent } from './page-nav/page-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    PageNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
