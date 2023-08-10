import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankLoansPage } from './bank-loans.page';

const routes: Routes = [
  {
    path: '',
    component: BankLoansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankLoansPageRoutingModule {}
