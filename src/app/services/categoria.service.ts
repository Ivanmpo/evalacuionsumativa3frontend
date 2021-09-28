import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria.interface';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  cat: Categoria = {};
  constructor(private http: HttpClient) {
    console.log("CAtegoria ServiCE");
    this.cargarCategorias(); //
    //this.cargarCategoriasWeb();
  }

  private cargarCategorias() {
    console.log("CAtegorias metodo privado");

    //this.http.get('').subscribe((respuesta) => { });
    this.http.get('assets/data/categorias.json')
    .subscribe((respuesta: Categoria) => {
      this.cat = respuesta;
      console.log(this.cat);
    });
  }

  private cargarCategoriasWeb(){
    this.http.get('https://learsixela.github.io/productos_json/productos.json').subscribe((respuesta: Categoria) => {
      console.log(respuesta);
    });

  }
}
