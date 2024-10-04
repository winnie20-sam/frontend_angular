import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'customers', component: CustomersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Apply the routes configuration
  exports: [RouterModule]
})
export class AppRoutingModule { }

