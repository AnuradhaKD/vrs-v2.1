import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-dealer',
  templateUrl: './contact-dealer.component.html',
  styleUrls: ['./contact-dealer.component.css']
})
export class ContactDealerComponent {
  cardDataList:any

  ngOnInit(){
    let cardDataListStr = JSON.parse(sessionStorage.getItem('cardDetails'));

    setTimeout(() => {
      this.cardDataList = cardDataListStr
      console.log(this.cardDataList)
    }, 1000);
  }
}
