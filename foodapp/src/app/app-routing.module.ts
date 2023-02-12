import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { DetailViewComponent } from './components/pages/detail-view/detail-view.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component:AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'detail/:id', component: DetailViewComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
