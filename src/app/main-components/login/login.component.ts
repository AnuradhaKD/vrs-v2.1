// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // template: '',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(public authService:AuthService,private afAuth: AngularFireAuth) {}

  // onSubmit() {
  //   this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
  //     .then((userCredential: any) => {
  //       // Handle successful sign up
  //     })
  //     .catch((error: any) => {
  //       // Handle error
  //     });
  // }
}
