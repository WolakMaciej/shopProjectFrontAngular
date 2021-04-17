import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {PageNotFoundComponent} from './components/shered/page-not-found/page-not-found.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {OrderListComponent} from './components/order-list/order-list.component';
import {ProductManagerComponent} from './components/product-manager/product-manager.component';
import {EditProductComponent} from './components/edit-product/edit-product.component';
import {AuthGuard} from './auth.guard';

const  routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
  { path: 'order-list', component: OrderListComponent},
  { path: 'product-manager', component: ProductManagerComponent, canActivate: [AuthGuard]},
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
