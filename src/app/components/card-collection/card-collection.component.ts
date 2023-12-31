import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss'],
})
export class CardCollectionComponent  implements OnInit {

  constructor() { }
  getImagePath(imageName: string): string {
    return `assets/${imageName}`;
  }

  ngOnInit() {}

}
