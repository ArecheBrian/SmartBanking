import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-loans',
  templateUrl: './bank-loans.page.html',
  styleUrls: ['./bank-loans.page.scss'],
})
export class BankLoansPage implements OnInit {

  constructor(private router: Router) { }
  goHome(){
    this.router.navigate(['/'])
  }
  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }
  ngOnInit() {
  }

}
