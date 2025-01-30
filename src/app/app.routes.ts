import { Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'todos', component: TodosListComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
];
