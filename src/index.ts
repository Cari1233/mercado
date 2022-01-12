//console.log("Super Mercado Dia");
//console.log("Azucar Ledesma");
//console.log("Yerba Rosamonte");
//console.log("Arroz Gallo");
//console.log("Shampoo Pantene");
//console.log("Pure Marolio");

//MERCADO DE PRODUCTOS EN STOCK

let Supermercado: string = "Supermercado Dia";
let producto1: string = "Azucar Ledesma 1kg";
let producto2: string = "Yerba Rosamonte 1/2 kg";
let producto3: string = "Arroz Gallo 500g";
let producto4: string = "Shampoo Pantene 170ml";
let producto5: string = "Pure Marolio 400g";

let precioProducto1: number = 100;
let precioProducto2: number = 250;
let precioProducto3: number = 170;
let precioProducto4: number = 290;
let precioProducto5: number = 120;

let stockProducto1: number = 860;
let stockProducto2: number = 680;
let stockProducto3: number = 760;
let stockProducto4: number = 430;
let stockProducto5: number = 540;

let compra: number;
let stockRestante: number;

console.log(Supermercado);
console.log(producto1 + " " + "$" + precioProducto1);
console.log(producto2 + " " + "$" + precioProducto2);
console.log(producto3 + " " + "$" + precioProducto3);
console.log(producto4 + " " + "$" + precioProducto4);
console.log(producto5 + " " + "$" + precioProducto5);

compra = precioProducto1 + precioProducto3;
console.log(compra);

stockRestante = stockProducto1 - 1;
console.log(stockRestante);

stockRestante = stockProducto3 - 1;
console.log(stockRestante);
