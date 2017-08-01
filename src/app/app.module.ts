import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppProduct } from './products/product.component';
import { AppInventory } from  './inventory.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './products/product-form.component'
import { Footer } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes = [
   { path : 'Product', component : AppProduct},
   { path : 'Inventory', component : AppInventory }
];


@NgModule({
  declarations: [AppComponent, AppInventory, AppProduct, Footer, ProductFormComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
