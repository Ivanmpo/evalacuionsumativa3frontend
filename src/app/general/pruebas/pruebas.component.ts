import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  Titulo: string = "Pruebas de angular";

  Fecha: number = new Date().getTime();
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  Fecha2: string = new Date().toString();
  Mes: number = new Date().getMonth() + 1;

  // puede ser de uno de los 3 tipos de datos
  Dia: number | null  = null;

  Contador: number = 0;
  dias_semana: string[] = ['Domingo', 'Lunes' , 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  DiaNuevo : string = "";

  //valores del formulario 
  email: string|null = null ;
  password : string|null = "";

  //valores a modal hijo
  TituloModal: string = "Soy el título";


  constructor() {
    console.log("Constructor Pruebas");
  }

  ngOnInit(): void {
    console.log("ngOnInit Pruebas");
  }

  //get y set
  get getMesNumber(): number{
    return this.Mes;
  }

  get getDiaNumber(): number|null{
    return this.Dia;
  }

  get contador(): number {
    return this.Contador;
  }

  obtenerDia(): void {
    this.Dia = new Date().getDay();
  }

  sumar(): void {
    this.Contador++;
  }

  restar(): void{
    this.Contador--;
  }

  eliminar(): void{
    this.dias_semana.pop();
  }

  agregarDia(): void{
    this.dias_semana.push(this.DiaNuevo);
  }

  agregarDia2(unnuevodia:string): void{
    if(unnuevodia){
      if(!this.dias_semana.includes(unnuevodia)){
        this.dias_semana.push(unnuevodia);
      }
    }
  }

  insertar(): void{
    console.log("Metodo insertar...");
    console.log(this.email, this.password);
  }

  insertar2(event:any): void{
    console.log("Metodo insertar 2...");
    event.preventDefault();
    console.log(event);
  }

  capturarVariable(mensaje: any): void {
    console.log("capturarVariable...", mensaje);
  }


}
