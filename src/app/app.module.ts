import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { LoginComponent } from './login/login/login.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { PagenotfoundComponent } from './compartida/pagenotfound/pagenotfound.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ProductoComponent,
    RegistrarComponent,
    CategoriaComponent,
    PagenotfoundComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
