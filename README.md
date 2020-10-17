# PatronesDiseno
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




