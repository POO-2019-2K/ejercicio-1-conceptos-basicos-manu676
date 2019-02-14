import Contacto from "./Contacto.js"

let C1 = new Contacto (
    "Juan Perez", 
    "Operador", 
    "312-456-2345", 
    "juan.perez@gmail.com") ;

 C1.imprimir();

 console.log (C1.nombre);
 console.log(C1._email);

 C1.puesto = "Jefe de departamento";

 console.log(C1.puesto);
 
 let C2 = new Contacto(
    "Jose Miguel", 
    "Asesor", 
    "314-109-14-70", 
    "josemike@gmail.com");

C2.imprimir();