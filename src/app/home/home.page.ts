import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}
  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }
  goToCreditCards(){
    this.router.navigate(['/credit-cards'])
  }
  goToBankLoans(){
    this.router.navigate(['/bank-loans'])
  }
  goForm(){
    this.router.navigate(['/stepper-form'])
  }
}
