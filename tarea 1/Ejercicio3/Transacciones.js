export default class Transacciones{
    constructor(ID, nombre, banco, monto, fecha=date){

        this._ID = ID;
        this._nombre = nombre.toUpperCase() ;
        this._banco = banco;
        this._monto = monto;
        this._fecha = fecha;
    }
    imprimir(){
        console.log(`${this._ID}, ${this._nombre}, ${this._banco},
        ${this._monto},${this._fecha}`);
    }

    get ID(){
        return this._ID;
    }
    get nombre(){
        return this._nombre.toUpperCase();
    }
    get banco(){
        return this._banco;
    }
    set banco(banco){
        this._banco = banco.toUpperCase();
    }
    set monto(monto){
        this._monto = monto();
    }
}