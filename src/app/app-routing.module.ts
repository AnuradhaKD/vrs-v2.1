import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './main-components/login/login.component';
import { RegistrationComponent } from './main-components/registration/registration.component';
import { HomeComponent } from './main-components/home/home.component';
import { ContactDealerComponent } from './main-components/contact-dealer/contact-dealer.component';
import { SearchComponent } from './main-components/search/search.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AddItemComponent } from './main-components/add-item/add-item.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact-seller', component: ContactDealerComponent },
      { path: 'search', component: SearchComponent },
      { path: 'add-item', component: AddItemComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },
      // Add other routes for your layout component
    ]
  },
   // Redirect any unknown paths to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
