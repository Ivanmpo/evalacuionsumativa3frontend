import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaProductos, Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProductos: ListaProductos[] = [];
  lista_productos: Producto[] = [];
  producto: Producto = {};
  constructor(private http: HttpClient) {
    this.cargarProductos();

  }

  private cargarProductos(){
    this.http.get('assets/data/productos.json')
    //.subscribe((respuesta: ListaProductos|any) => {
      .subscribe((respuesta: Producto|any) => {
      this.lista_productos = respuesta.productos;
      console.log("TIPO DE DATO : " + typeof(this.lista_productos));
    });
  }

}
