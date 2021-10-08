let monto: number = 1000;
let cantidad: number = 1;
let montoConDescuento: number = 0;
let descuento: number = 0;
let precioTotal: number = 0;
precioTotal = monto * cantidad;

if precioTotal >= 1000) {
  descuento = (precioTotal * 10)/100;
  montoConDescuento = precioTotal - descuento;
  console.log ("Por gastar mas de 1000 tiene un descuento del 10%");
  console.log ("el monto a pagar es:" + montoConDescuento);
} else {
  console.log (" no tiene descuento; el monto a pagar es"); 
