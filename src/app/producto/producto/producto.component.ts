import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  carrito: Producto[] = [];
  Total_carrito: number = 0;
  constructor(public categoriaService: CategoriaService, public productoService: ProductoService) {


  }

  ngOnInit(): void {

  }

  get getCarritoCompras(): Producto[] {
    return this.carrito;
  }

  get getTotalCarrito(): number {
    return this.Total_carrito;
  }


  agregarProductoACarrito(id_producto: string): void {

    this.productoService.lista_productos.forEach(producto => {
      if (producto.id == Number(id_producto)) {
        if (producto.cantidad && producto.cantidad > 0) {
          let producto_agregado = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio
          }
          this.carrito.push(producto_agregado);
          console.log(producto.cantidad);
          producto.cantidad = producto.cantidad - 1;
          this.Total_carrito += Number(producto.precio);
          console.log(this.Total_carrito);
        } else {
          console.log("No queda stock");
        }
      }
    });

    this.productoService.setCarrito(this.carrito);
  }

  eliminarProductoDeCarrito(indice: number, id_producto: number|undefined): void {

    this.carrito.splice(Number(indice),1);
    this.productoService.lista_productos.forEach(producto => {
      if (producto.id == Number(id_producto)) {
        console.log(typeof(producto.cantidad));
        if(typeof(producto.cantidad)!="undefined") {
          producto.cantidad = producto.cantidad + 1;
          console.log(producto.cantidad);
          this.Total_carrito -= Number(producto.precio);
        }
      }
    });
  }

}
