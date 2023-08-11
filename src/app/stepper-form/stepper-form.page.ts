import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.page.html',
  styleUrls: ['./stepper-form.page.scss'],
})
export class StepperFormPage implements OnInit {
  public progress = 0;


  constructor(private router: Router) { }
  goHome(){
    this.router.navigate(['/'])
  }
  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }
  step: any = 1;
  nextStep(){
    this.step = this.step + 1
    this.progress = this.progress + 0.25
  }
  prevStep(){
    this.step = this.step - 1
    this.progress = this.progress - 0.25
  }

  ngOnInit() {
  }

}
