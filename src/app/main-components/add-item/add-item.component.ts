import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormDataModel } from 'src/app/shared/models/formData.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent {
  formData: FormDataModel = new FormDataModel();
  constructor(private db: AngularFireDatabase) {}

  onSubmit(): void {
    this.db.list('https://vehicle-related-services-v1-default-rtdb.asia-southeast1.firebasedatabase.app').push(this.formData);
  }
}
