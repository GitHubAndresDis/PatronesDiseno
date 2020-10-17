var pelotaPrincipal = null, pelotaRival = null, controlY = 0, controlX = 0, divTablero = null, tamano = 30 , totalPelotas = 15;

var randomLocationY = new clsRandom(0, 500);
var randomLocationX = new clsRandom(0, 1000);
var validaciones = new clsValidaciones(0, 500, 0, 1000);
var pelotasJuego = new clsColeccion();

$(document).ready(function () {
    
    divTablero = $('#div_Tablero');

    IniciarJuego();

    PintarPelotas();

    $(divTablero).mousemove(function (event) {
        if (controlX != 0 && controlY != 0) {
            MoverPelotaPrincipal(event.clientX, event.clientY);
        } else {
            controlX = event.clientX;
            controlY = event.clientY;
        }
    });
});

function IniciarJuego() {
    try {
        pelotaPrincipal = new clsPelota('pelota_1', true, GenerarColor(), validaciones.ValidarPosicionY(tamano, randomLocationY.GetValue()), validaciones.ValidarPosicionX(tamano, randomLocationX.GetValue()), tamano, tamano);

        pelotaRival = new clsPelota('pelota_R', false, GenerarColor(), validaciones.ValidarPosicionY(tamano, randomLocationY.GetValue()), validaciones.ValidarPosicionX(tamano, randomLocationX.GetValue()), tamano, tamano);

        var objDibujar = new clsDibujar(pelotaPrincipal);
        objDibujar.Dibujar('nuevo', divTablero);

        objDibujar = new clsPelotaConBorde(pelotaPrincipal)
        objDibujar.DibujarBorde(GenerarColor());

    } catch (err) {
        console.error('Error: IniciarJuego ' + err.toString());
    }
}

function PintarPelotas() {
    try {

        for (var i = 1; i < totalPelotas; i++) {
            var nuevaPelota = Object.assign({}, pelotaRival);

            nuevaPelota.Id = 'pelota_' + (i + 1);
            nuevaPelota.color = GenerarColor();
            
            do {
                nuevaPelota.location_y = validaciones.ValidarPosicionY(nuevaPelota.width, randomLocationY.GetValue());
                nuevaPelota.location_x = validaciones.ValidarPosicionX(nuevaPelota.height, randomLocationX.GetValue());
            } while (!validaciones.ValidarPocicionPelota(pelotasJuego, nuevaPelota))
            

            var objDibujar = new clsDibujar(nuevaPelota);
            objDibujar.Dibujar('nuevo', divTablero);

            pelotasJuego.AgregarElemeto(nuevaPelota);
        }
    } catch (err) {
        console.error('Error: PintarPelotas ' + err.toString());
    }
}

function MoverPelotaPrincipal(posicionX, posicionY) {
    try {
        if (controlX < posicionX) {
            pelotaPrincipal.location_x += 5;
        } else if (controlX > posicionX) {
            pelotaPrincipal.location_x -= 5;
        }

        if (controlY < posicionY) {
            pelotaPrincipal.location_y += 5;
        } else if (controlY > posicionY) {
            pelotaPrincipal.location_y -= 5;
        }

        var ok = false;

        do {
            pelotaPrincipal.location_x = validaciones.ValidarPosicionX(pelotaPrincipal.width, pelotaPrincipal.location_x);
            pelotaPrincipal.location_y = validaciones.ValidarPosicionY(pelotaPrincipal.height, pelotaPrincipal.location_y);

            var dibujarPelota = new clsDibujar(pelotaPrincipal).Dibujar('posicion');

            controlX = posicionX;
            controlY = posicionY;

            //if (validaciones.ValidarPocicionPelota(pelotasJuego, pelotaPrincipal)) {
            //    pelotaPrincipal.width += 5;
            //    pelotaPrincipal.height += 5;
            //    console.log('crecer');
            //} else {
            //    ok = true;
            //}
            ok = true;
        }while(!ok);

        

    } catch (err) {
        console.error('Error: MoverPelotaPrincipal ' + err.toString());
    }
}

function GenerarColor() {
    try {
        var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";

        for (var i = 0; i < 6; i++) {
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }

        return color;
    } catch (err) {
        console.error('Error: GenerarNuevoColor ' + err.toString());
    }
}