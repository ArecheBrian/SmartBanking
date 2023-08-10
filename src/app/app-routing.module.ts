import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'credit-cards',
    loadChildren: () => import('./credit-cards/credit-cards.module').then( m => m.CreditCardsPageModule)
  },
  {
    path: 'bank-loans',
    loadChildren: () => import('./bank-loans/bank-loans.module').then( m => m.BankLoansPageModule)
  },
  {
    path: 'stepper-form',
    loadChildren: () => import('./stepper-form/stepper-form.module').then( m => m.StepperFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
