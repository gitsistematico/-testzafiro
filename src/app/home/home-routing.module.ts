import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'shoppingCar',
    component: ShoppingCarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
