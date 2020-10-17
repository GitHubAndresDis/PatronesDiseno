class clsDibujar {

    constructor(pelota) {
        this.pelota = pelota;
    }

    Dibujar(tipo, control = undefined) {
        try {
            if(tipo == 'nuevo') {
                var div = $('<div id="' + this.pelota.id + '"/>').addClass('pelota');
                div.css('width', this.pelota.width + 'px');
                div.css('height', this.pelota.height + 'px');
                div.css('background-color', this.pelota.color);
                div.css('left', this.pelota.location_x + 'px');
                div.css('top', this.pelota.location_y + 'px');
                control.append(div);
            } else if(tipo == 'posicion') {
                $('#' + this.pelota.id).css('left', this.pelota.location_x + 'px');
                $('#' + this.pelota.id).css('top', this.pelota.location_y + 'px');
            }
        } catch(err){
            console.error('Error: clsDibujarPelota.Draw ' + err.toString());
        }
    }
}