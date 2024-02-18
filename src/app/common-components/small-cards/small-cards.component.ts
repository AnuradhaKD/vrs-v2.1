import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent {
@Input() data:any
}
