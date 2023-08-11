import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.page.html',
  styleUrls: ['./credit-cards.page.scss'],
})
export class CreditCardsPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  creditCards: any = [];
  currentCard: any = {};
  changeC: number = 0;

  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }
  goHome(){
    this.router.navigate(['/'])
  }
  getCCards(){
    return this.http
    .get("assets/files/creditCardsData.json")
    .pipe(
      map((res:any)=>{
        return res.data
      })
    )
  }
  changeCard(value: number){
    this.getCCards().subscribe(res=>{
      this.currentCard = res[value]
    })

  }

  ngOnInit() {
    this.getCCards().subscribe(res=>{
      this.creditCards = res
      this.currentCard = res[0]
      console.log(this.currentCard);
    })
  }

}
