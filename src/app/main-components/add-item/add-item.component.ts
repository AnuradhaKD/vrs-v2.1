import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormDataModel } from 'src/app/shared/models/formData.model';
import { CommonService } from 'src/app/shared/services/common/common.service';
declare var $: any;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  formDataList: any[]; 
  formData: FormDataModel = new FormDataModel();
  selectedImages:any

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    $('#postAdBtn').on('click', () => {
      this.commonService.addFormData(this.formData, this.selectedImages);
    });
   }

  onImagesChange(event: any) {
    const fileList: FileList = event.target.files;
    this.selectedImages = [];

    for (let i = 0; i < fileList.length; i++) {
      this.selectedImages.push(fileList.item(i));
    }
  }

  
}
