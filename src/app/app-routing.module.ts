import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  { path:'coins' , component: CoinsComponent},
  { path:'coinDetail', component: CoinDetailsComponent},
  { path:'**', redirectTo: '/coins'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
