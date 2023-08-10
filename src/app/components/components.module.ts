import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CreditCardsPageRoutingModule } from '../credit-cards/credit-cards-routing.module';
import { AdditionalCostsComponent } from './additional-costs/additional-costs.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';
import { CardsInfoComponent } from './cards-info/cards-info.component';
import { LoanFormComponent } from './loan-form/loan-form.component';



@NgModule({
  declarations: [
    AdditionalCostsComponent,
    ButtonGroupComponent,
    CardComponent,
    CardCollectionComponent,
    CardsInfoComponent,
    LoanFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CreditCardsPageRoutingModule
  ],
  exports: [
    AdditionalCostsComponent,
    ButtonGroupComponent,
    CardComponent,
    CardCollectionComponent,
    CardsInfoComponent,
    LoanFormComponent
  ]
})
export class ComponentsModule { }
