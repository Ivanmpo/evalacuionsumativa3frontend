import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { LoginModule } from './login/login.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { ProductoComponent } from './producto/producto/producto.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from './categoria/categoria/categoria.component';
import { PagenotfoundComponent } from './compartida/pagenotfound/pagenotfound.component';
import { GeneralModule } from './general/general.module';
import { PagoModule } from './pago/pago.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ProductoComponent,
    CategoriaComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    GeneralModule,
    PagoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
