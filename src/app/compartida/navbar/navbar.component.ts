import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  anio: number = new Date().getFullYear();
  saludo: string = "Saludos";
  constructor() { }

  ngOnInit(): void {
  }

}
