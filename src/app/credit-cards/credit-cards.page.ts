import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.page.html',
  styleUrls: ['./credit-cards.page.scss'],
})
export class CreditCardsPage implements OnInit {

  constructor(private router: Router) { }
  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }
  goHome(){
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
