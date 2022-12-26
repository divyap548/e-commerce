import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './routes/products-list/products-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './routes/product-details/product-details.component';

const myRoutes: Routes = [
  { path: 'products', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(myRoutes), HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
