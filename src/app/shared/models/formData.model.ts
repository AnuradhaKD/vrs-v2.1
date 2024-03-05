export class FormDataModel {
    name: string;
    contactNumber1: string;
    contactNumber2: string;
    shopName: string;
    shopType: string;
    shopAddress: string;
    itemName: string;
    imageUrls:  string[] = [];
    itemPrice: string;
    description: string;
  
    constructor() {
      // Initialize properties with default values if needed
      this.name = '';
      this.contactNumber1 = '';
      this.contactNumber2 = '';
      this.shopName = '';
      this.shopType = '';
      this.shopAddress = '';
      this.itemName = '';
      this.imageUrls =[];
      this.itemPrice = '';
      this.description = '';
    }
  }