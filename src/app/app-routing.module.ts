import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './main-components/login/login.component';
import { RegistrationComponent } from './main-components/registration/registration.component';
import { HomeComponent } from './main-components/home/home.component';
import { ContactDealerComponent } from './main-components/contact-dealer/contact-dealer.component';
import { SearchComponent } from './main-components/search/search.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact-seller', component: ContactDealerComponent },
      { path: 'search', component: SearchComponent },
      // Add other routes for your layout component
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  // { path: 'sell-items', component: SellerItemsComponent },
  // Add other routes for pages outside the layout
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Redirect any unknown paths to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
