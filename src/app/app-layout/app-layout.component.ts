import { Component } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {
  currentYear: number = new Date().getFullYear();
}
