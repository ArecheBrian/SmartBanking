import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepperFormPage } from './stepper-form.page';

const routes: Routes = [
  {
    path: '',
    component: StepperFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepperFormPageRoutingModule {}
