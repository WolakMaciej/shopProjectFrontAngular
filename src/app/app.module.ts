import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './components/shered/footer/footer.component';
import { NavComponent } from './components/shered/nav/nav.component';
import { HeaderComponent } from './components/shered/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductComponent } from './components/shopping-cart/product-list/product/product.component';
import { CartListComponent } from './components/shopping-cart/cart-list/cart-list.component';
import { CartComponent } from './components/shopping-cart/cart-list/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shered/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductComponent,
    CartListComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AddProductComponent,
    OrderListComponent,
    ProductManagerComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
