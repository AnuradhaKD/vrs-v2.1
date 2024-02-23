import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public authService:AuthService,private afAuth: AngularFireAuth) {}

  isAccordionOneOpen = true;
  isAccordionTwoOpen = false;

  toggleAccordion(accordionId: string) {
    if (accordionId === 'collapseOne') {
      this.isAccordionOneOpen = !this.isAccordionOneOpen;
      this.isAccordionTwoOpen = false;
    } else if (accordionId === 'collapseTwo') {
      this.isAccordionTwoOpen = !this.isAccordionTwoOpen;
      this.isAccordionOneOpen = false;
    }
  }
}
