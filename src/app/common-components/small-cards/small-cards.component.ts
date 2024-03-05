import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent {
[x: string]: any;
@Input() data:any
constructor(commonService:CommonService){}

getSessionData(data: any) {
  console.log('Contacting seller:', data);
  let dataStr = JSON.stringify(data)
  this.setSessionData(dataStr);
}

setSessionData(cardDetails:any){
  sessionStorage.setItem('cardDetails',cardDetails)
}

}
