import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() titulo: any = null;
  @Input() detalle: any = null;


  @Output() propagar = new EventEmitter<string>();
  mensaje: string|undefined ;

  enviarDatos(){
    this.mensaje= "Eniando datos al padre";
    this.propagar.emit(this.mensaje);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
