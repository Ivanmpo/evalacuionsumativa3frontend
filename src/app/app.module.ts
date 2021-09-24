import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { LoginComponent } from './login/login/login.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { ProductosComponent } from './productos/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
