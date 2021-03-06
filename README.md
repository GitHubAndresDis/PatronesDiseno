# Patrones de diseño
Actividad de patrones de diseño - Informatica 1

Patrones de diseño impementados


# Patrón de creación - Prototype

Los patrones de creación abstraen la forma en la que se crean los objetos, permitiendo tratar las clases a crear de forma genérica dejando para más tarde la decisión de qué clases crear o cómo crearlas.

Se implementa este patrón en la creación de las pelotas rivales.

Se crea una primera pelota rival.

	pelotaRival = new clsPelota('pelota_R', false, GenerarColor(), validaciones.ValidarPosicionY(tamano, randomLocationY.GetValue()), validaciones.ValidarPosicionX(tamano, randomLocationX.GetValue()), tamano, tamano);


Clonando este objeto se obtienen todos los demas objetos rivales.

	var nuevaPelota = Object.assign({}, pelotaRival);


# Patrón Estructural - Decorador

Añade dinámicamente nuevas responsabilidades a un objeto, proporcionando una alternativa flexible a la herencia para extender la funcionalidad.

Se implementa este patrón cuando se agrega al dibujo de una pelota un borde adicional a esta pelota. 

La clase encargada de dibujar una pelota con borde apartir de una instancia de la pelota definida con la clase es clsDibujar es clsPelotaConBorde y se implemento de esta forma:

	pelotaPrincipal = new clsPelota('pelota_1', true, GenerarColor(), validaciones.ValidarPosicionY(tamano, randomLocationY.GetValue()), validaciones.ValidarPosicionX(tamano, randomLocationX.GetValue()), tamano, tamano);
        pelotaPrincipal = new clsPelotaConBorde(pelotaPrincipal);
        pelotaPrincipal.Dibujar(divTablero, GenerarColor());

La clase clsPelota tiene su método para dibujar.

	Dibujar(tipo, control = undefined) {
		try {
		    if(tipo == 'nuevo') {
			var div = $('<div id="' + this.id + '"/>').addClass('pelota');
			div.css('width', this.width + 'px');
			div.css('height', this.height + 'px');
			div.css('background-color', this.color);
			div.css('left', this.location_x + 'px');
			div.css('top', this.location_y + 'px');
			control.append(div);
		    } else if(tipo == 'posicion') {
			$('#' + this.id).css('left', this.location_x + 'px');
			$('#' + this.id).css('top', this.location_y + 'px');
		    }
		} catch(err){
		    console.error('Error: clsDibujarPelota.Draw ' + err.toString());
		}
	    }

Pero la clase clsPelotaConBorde implementa este método pero adicional de dibujar la pelota este le pone un borde.

	Dibujar(control, colorBorde) {
		try {
		    var div = $('<div id="' + this.id + '"/>').addClass('pelota');
		    div.css('width', this.width + 'px');
		    div.css('height', this.height + 'px');
		    div.css('background-color', this.color);
		    div.css('left', this.location_x + 'px');
		    div.css('top', this.location_y + 'px');
		    div.css('border', '2px solid ' + colorBorde);
		    control.append(div);
		} catch(err){
		    console.error('Error: clsDibujarPelota.Draw ' + err.toString());
		}
	    }


# Patrón de comportamiento - Iterator

Proporciona un modo de acceder secuencialmente a los elementos de un objeto agregado sin exponer su representación interna.

Se implementa este patrón cuando se necesita almacenar la información de las pelotas, para al momento de validaciones realizar un recorrido de estas.

La clase que iterador es esta, bueno la clase de la colección es clsColeccion.

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
	
	
Como se instancia en AgarIO.js:

	var pelotasJuego = new clsColeccion();


Ejemplo del llenado de la colección

	pelotasJuego.AgregarElemeto(nuevaPelota);


Como se recorre la colección en este caso en la clase de validaciones.

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



POR: DAINER ANDRES VERGARA RODRIGUEZ






