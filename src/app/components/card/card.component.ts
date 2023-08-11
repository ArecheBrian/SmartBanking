import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  constructor() { }

  @Input() cardData : any = {};

  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }
  ngOnInit() {
  }

}
