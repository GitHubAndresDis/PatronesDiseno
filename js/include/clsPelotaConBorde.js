class clsPelotaConBorde {

    constructor(pelota) {
        this.pelota = pelota;
    }

    DibujarBorde(color) {
        try {
            $('#' + this.pelota.id).css('border', '2px solid ' + color);
        } catch(err){
            console.error('Error: clsDibujarPelota.Draw ' + err.toString());
        }
    }

}
