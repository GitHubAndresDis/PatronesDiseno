class clsValidaciones {

    constructor(minValueY, maxValueY, minValueX, maxValueX) {
        this.minValueY = minValueY;
        this.maxValueY = maxValueY;
        this.minValueX = minValueX;
        this.maxValueX = maxValueX;
    }

    ValidarPosicionY(alto, posicion) {
        try {
            if((posicion + alto) >  this.maxValueY){
                return posicion - ((posicion + alto) - this.maxValueY);
            } else if((posicion + alto) < (this.minValueY + alto)) {
                return 0;
            } else {
                return posicion;
            }
        } catch(err) {
            console.error('Error: ValidarPosicionY ' + err.toString());
            return posicion;
        }
    }

    ValidarPosicionX(ancho, posicion) {
        try {
            if((posicion + ancho) >  this.maxValueX){
                return posicion - ((posicion + ancho) - this.maxValueX);
            } else if((posicion + ancho) <  (this.minValueX + ancho)) {
                return 0;
            } else {
                return posicion;
            }
        } catch(err) {
            console.error('Error: ValidarPosicionY ' + err.toString());
            return posicion;
        }
    }

    ValidarPocicionPelota(pelotas, pelotaNueva){
        try {
            var resultado = true;

            var pelotaExitente = pelotas.IniciarRecorrido();

            while(pelotaExitente != undefined){
                    if((pelotaNueva.location_y + pelotaNueva.height) <= pelotaExitente.location_y && pelotaExitente.location_y <= pelotaNueva.location_y){
                        resultado = false;
                    } else if ((pelotaExitente.location_y + pelotaExitente.height) <= pelotaNueva.location_y && pelotaNueva.location_y <= pelotaExitente.location_y){
                        resultado = false;
                    }

                    if((pelotaNueva.location_x + pelotaNueva.width) <= pelotaExitente.location_x && pelotaExitente.location_x <= pelotaNueva.location_x){
                        resultado = false;
                    } else if ((pelotaExitente.location_x + pelotaExitente.width) <= pelotaNueva.location_x && pelotaNueva.location_x <= pelotaExitente.location_x){
                        resultado = false;
                    }
                pelotaExitente = pelotas.Siguiente();
            }

            return resultado;
        } catch(err){
            console.error('Error: ValidarPocicionPelota ' + err.toString());
            return true;
        }
    }
}