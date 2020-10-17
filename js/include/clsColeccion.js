class clsColeccion {

    constructor() {
        this.indice = 0;
        this.pelotas = new Array();
    }

    IniciarRecorrido(){
        this.indice = 0;
        return this.pelotas[this.indice];
    }

    AgregarElemeto(elemento){
        this.pelotas.push(elemento);
    }

    Siguiente(){
        this.indice += 1;
        return this.pelotas[this.indice];
    }
}
