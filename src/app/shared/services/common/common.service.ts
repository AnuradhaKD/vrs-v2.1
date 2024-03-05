// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { FormDataModel } from '../../models/formData.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {}

  addFormData(formData: FormDataModel, imageFiles: File[]): void {
    // Upload each image to Firebase Storage
    imageFiles.forEach((imageFile, index) => {
      const filePath = `/images/${imageFile.name}`;
      const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, imageFile);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            // Update FormDataModel with image URL
            formData.imageUrls.push(downloadURL);

            // Save form data to Firebase Database after all images are uploaded
            if (index === imageFiles.length - 1) {
              this.db.list('/vrs-2-1').push(formData);
            }
          });
        })
      ).subscribe();
    });
  }

  getAllData(): Observable<any[]> {
    return this.db.list('/vrs-2-1').valueChanges();
  }

  
}
