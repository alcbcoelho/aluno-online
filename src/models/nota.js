class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        if (this.mediaFinal() >= 9 && this.mediaFinal() <= 10) return "SS";
        if (this.mediaFinal() >= 7 && this.mediaFinal() <= 8.9) return "MS";
        if (this.mediaFinal() >= 5 && this.mediaFinal() <= 6.9) return "MM";
        if (this.mediaFinal() >= 3 && this.mediaFinal() <= 4.9) return "MI";
        if (this.mediaFinal() >= 0.1 && this.mediaFinal() <= 2.9) return "II";
        if (this.mediaFinal() <= 0.0) return "SR";
    }
}

module.exports = Nota;