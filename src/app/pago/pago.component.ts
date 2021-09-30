import { Component, OnInit } from '@angular/core';
import { Pago, TipoPago } from '../interfaces/pago.interface';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(public productoService: ProductoService) {
    console.log("Procuto service desde pago component");
    console.log(productoService.carrito);
  }

  elpago: Pago = {
    pais: "",
    calle: "",
    ciudad: "",
    region: "",
    codigopostal: ""
  };

  tipoPago: TipoPago = {
    tipo_tarjeta: "",
    nombre_cliente: "",
    numero_tarjeta: "",
    codigo_seguridad: "",
    mes_expiracion: "",
    anho_expiracion: ""
  }

  paisMensaje: string = "";
  calleMensaje: string = "";
  ciudadMensaje: string = "";
  regionMensaje: string = "";
  codigopostalMensaje: string = "";

  tipotarjetaMensaje: string = "";
  nombre_clienteMensaje: string = "";
  numero_tarjetaMensaje: string = "";
  codigo_seguridadMensaje: string = "";
  mes_expiracionMensaje: string = "";
  anho_expiracionMensaje: string = "";

  ngOnInit(): void {
  }

  generarPago(): void {
    console.log("Metodo GEnerar Pago en pagocomponent...");
    this.validar();
  }


  validar() {
    if (!this.elpago.pais) {
      this.paisMensaje = "Pais no puede estar vacio";

    } else {
      if (/\d/.test(this.elpago.pais)) {
        this.paisMensaje = "Pais no puede contener números";
      } else {
        this.paisMensaje = "";
      }
    }

    if (!this.elpago.calle) {
      this.calleMensaje = "Calle no puede estar vacio";

    } else {
      this.calleMensaje = "";
    }

    if (!this.elpago.ciudad) {
      this.ciudadMensaje = "Ciudad no puede estar vacio";

    } else {
      if (/\d/.test(this.elpago.ciudad)) {
        this.ciudadMensaje = "Ciudad no puede contener números";
      } else {
        this.ciudadMensaje = "";
      }
    }

    if (!this.elpago.region) {
      this.regionMensaje = "Región no puede estar vacio";

    } else {
      if (/\d/.test(this.elpago.region)) {
        this.regionMensaje = "Región no puede contener números";
      } else {
        this.regionMensaje = "";
      }
    }

    if (!this.elpago.codigopostal) {
      this.codigopostalMensaje = "Código postal no puede estar vacio";

    } else {
      if (!/\d/.test(this.elpago.codigopostal)) {
        this.codigopostalMensaje = "Código postal no puede contener letras";
      } else {
        this.codigopostalMensaje = "";
      }
    }


    /* TARJETA DE PAGO */
    if (!this.tipoPago.tipo_tarjeta) {
      this.tipotarjetaMensaje = "Tipo de tarjeta no puede estar vacio";

    } else {
      if (/\d/.test(this.tipoPago.tipo_tarjeta)) {
        this.tipotarjetaMensaje = "Tipo de tarjeta no puede contener números";
      } else {
        this.tipotarjetaMensaje = "";
      }
    }

    if (!this.tipoPago.nombre_cliente) {
      this.nombre_clienteMensaje = "Nombre de cliente no puede estar vacio";

    } else {
      if (/\d/.test(this.tipoPago.nombre_cliente)) {
        this.nombre_clienteMensaje = "Nombre de cliente no puede contener números";
      } else {
        this.nombre_clienteMensaje = "";
      }
    }

    if (!this.tipoPago.numero_tarjeta) {
      this.numero_tarjetaMensaje = "Número de Tarjeta no puede estar vacio";

    } else {

      if (!/\d/.test(this.tipoPago.numero_tarjeta)) {
        this.numero_tarjetaMensaje = "Número de tarjeta no puede contener letras";
      } else {
        this.numero_tarjetaMensaje = "";
      }
    }

    if (!this.tipoPago.codigo_seguridad) {
      this.codigo_seguridadMensaje = "Código de Seguridad no puede estar vacio";

    } else {
      if (!/\d/.test(this.tipoPago.codigo_seguridad)) {
        this.codigo_seguridadMensaje = "Código de Seguridad no puede contener letras";
      } else {
        this.codigo_seguridadMensaje = "";
      }
    }

    if (!this.tipoPago.mes_expiracion) {
      this.mes_expiracionMensaje = "Mes de Expiración no puede estar vacio";

    } else {
      if (!/\d/.test(this.tipoPago.mes_expiracion)) {
        this.mes_expiracionMensaje = "Mes de Expiración no puede contener letras";
      } else {
        this.mes_expiracionMensaje = "";
      }
    }

    if (!this.tipoPago.anho_expiracion) {
      this.anho_expiracionMensaje = "Año de Expiración no puede estar vacio";

    } else {
      if (!/\d/.test(this.tipoPago.anho_expiracion)) {
        this.anho_expiracionMensaje = "Año de Expiración no puede contener letras";
      } else {
        this.anho_expiracionMensaje = "";
      }
    }

  }
}
