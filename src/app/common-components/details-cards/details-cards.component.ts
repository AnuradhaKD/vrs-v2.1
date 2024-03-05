import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-details-cards',
  templateUrl: './details-cards.component.html',
  styleUrls: ['./details-cards.component.css',]
})
export class DetailsCardsComponent {
  @Input() data:any
}