import Transacciones from "./Transacciones.js"

let T1  = new Transacciones(
    "****-****-****-5213",
    "Juan Perez",  
    "Santander",
    "$5000.00", 
    "5 de Febrero del 2019");
T1.imprimir();

 console.log(T1.ID);
 console.log(T1.nombre);
 console.log(T1._monto);

 T1.banco = "Banamex";
 console.log(T1.banco);