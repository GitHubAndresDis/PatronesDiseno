class clsRandom {

    constructor(minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    GetValue() {
        try {
            return Math.round(Math.random() * (this.maxValue - this.minValue) + this.minValue);
        } catch(err){
            console.error('Error: getValue ' + err.toString());
            return 0;
        }
    }
}