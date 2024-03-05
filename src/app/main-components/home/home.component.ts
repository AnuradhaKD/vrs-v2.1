import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common/common.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeTab: string = 'accessories';
  formDataList: any[];

  accessoriesData: any=[];
  repairData: any=[];
  sparePartsData: any=[];
  sellVehicleData: any=[];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.loadData();
    setTimeout(() => {
      console.log(this.accessoriesData);
      console.log(this.repairData);
      console.log(this.sparePartsData);
      console.log(this.sellVehicleData);
    }, 4000);

    window.setInterval(() => {
      this.rotate();
    }, 4000);
  }

  loadData() {
    this.commonService.getAllData().subscribe((data) => {
      this.formDataList = data;
      console.log(this.formDataList); 

      

      $(this.formDataList).each((index, item) => {
        let checkType = item.shopType;
        if (checkType === '1') {
          let temp = {
            name: item.name,
            shopName: item.shopName,
            shopAddress: item.shopAddress,
            itemName: item.itemName,
            description: item.description,
            itemPrice: item.itemPrice,
            imageUrls: item.imageUrls,
          };
          this.accessoriesData.push(temp);
        } else if (checkType === '2') {
          let temp = {
            name: item.name,
            shopName: item.shopName,
            shopAddress: item.shopAddress,
            itemName: item.itemName,
            description: item.description,
            itemPrice: item.itemPrice,
            imageUrls: item.imageUrls,
          };
          this.repairData.push(temp);
        } else if (checkType === '3') {
          let temp = {
            name: item.name,
            shopName: item.shopName,
            shopAddress: item.shopAddress,
            itemName: item.itemName,
            description: item.description,
            itemPrice: item.itemPrice,
            imageUrls: item.imageUrls,
          };
          this.sparePartsData.push(temp);
        } else if (checkType === '4') {
          let temp = {
            name: item.name,
            shopName: item.shopName,
            shopAddress: item.shopAddress,
            itemName: item.itemName,
            description: item.description,
            itemPrice: item.itemPrice,
            imageUrls: item.imageUrls,
          };
          this.sellVehicleData.push(temp);
        } else {
          console.log('ínvalid');
        }
      });
    });
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
  }
  rotate() {
    var lastChild = $('.slider div:last-child').clone();
    /*$('#test').html(lastChild)*/
    $('.slider div').removeClass('firstSlide');
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild);
    $(lastChild).addClass('firstSlide');
  }
}
