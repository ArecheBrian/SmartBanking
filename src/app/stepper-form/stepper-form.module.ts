import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepperFormPageRoutingModule } from './stepper-form-routing.module';

import { StepperFormPage } from './stepper-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepperFormPageRoutingModule,
  ],
  declarations: [StepperFormPage]
})
export class StepperFormPageModule {}
