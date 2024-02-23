export class FormDataModel {
    name: string;
    contactNumber1: string;
    contactNumber2: string;
    shopName: string;
    shopType: string;
    address: string;
    itemName: string;
    images: File;
    itemPrice: string;
    description: string;
  
    constructor() {
      // Initialize properties with default values if needed
      this.name = '';
      this.contactNumber1 = '';
      this.contactNumber2 = '';
      this.shopName = '';
      this.shopType = '';
      this.address = '';
      this.itemName = '';
      this.images = null;
      this.itemPrice = '';
      this.description = '';
    }
  }