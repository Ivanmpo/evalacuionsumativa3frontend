export interface Pago {
    pais?: string;
    calle?: string;
    ciudad?: string;
    region?: string;
    codigopostal?: string;
}

export interface TipoPago {
    tipo_tarjeta: string;
    nombre_cliente: string;
    numero_tarjeta: string;
    codigo_seguridad: string;
    mes_expiracion: string;
    anho_expiracion: string;
}