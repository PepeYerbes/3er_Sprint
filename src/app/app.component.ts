import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { HomePadreComponent } from "./home-padre/home-padre.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, HomeComponent, FooterComponent, HomePadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas_sprint_3';

}