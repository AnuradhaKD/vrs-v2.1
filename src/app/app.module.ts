import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main-components/login/login.component';

// Import AngularFire modules

import { RegistrationComponent } from './main-components/registration/registration.component';
import { SmallCardsComponent } from './common-components/small-cards/small-cards.component';
import { DetailsCardsComponent } from './common-components/details-cards/details-cards.component';
import { HomeComponent } from './main-components/home/home.component';
import { ContactDealerComponent } from './main-components/contact-dealer/contact-dealer.component';
import { SearchComponent } from './main-components/search/search.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddItemComponent } from './main-components/add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    SmallCardsComponent,
    DetailsCardsComponent,
    HomeComponent,
    ContactDealerComponent,
    SearchComponent,
    AppLayoutComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideDatabase(() => getDatabase()),
    // provideStorage(() => getStorage()),
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
