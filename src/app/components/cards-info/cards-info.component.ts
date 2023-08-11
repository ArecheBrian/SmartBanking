import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-info',
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.scss'],
})
export class CardsInfoComponent  implements OnInit {

  constructor() { }
  @Input() cardData : any = {};

  ngOnInit() {}

}
