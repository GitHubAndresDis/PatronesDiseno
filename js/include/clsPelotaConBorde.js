class clsPelotaConBorde {

    constructor(pelota) {
        this.id = pelota.id;
        this.principal = pelota.principal;
        this.color = pelota.color;
        this.location_y = pelota.location_y;
        this.location_x = pelota.location_x;
        this.width = pelota.width;
        this.height = pelota.height;
    }

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

}
