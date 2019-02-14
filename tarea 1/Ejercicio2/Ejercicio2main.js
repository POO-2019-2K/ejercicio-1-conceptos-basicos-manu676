import Reservacion from "./Reservacion.js";

let R1 = new Reservacion (
    "Mauricio Axel Villanueva",
    "Normal",
    "216 A",
    "4",
    `${new Date("2019/02/18")}`,
    `${new Date("2019/02/23")}`,
    "" );

R1.imprimir();

let a = new Date();
let b = new Date("2019/02/18");

let dias = `${b-a}`;
R1.diasParaLlegada = `${Math.trunc(((Number(dias)) / (1000*60*60*24)))} días para llegada `;
 
R1.imprimir();