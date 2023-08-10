import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankLoansPageRoutingModule } from './bank-loans-routing.module';

import { BankLoansPage } from './bank-loans.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankLoansPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BankLoansPage]
})
export class BankLoansPageModule {}
