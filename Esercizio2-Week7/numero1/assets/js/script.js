class Person {
    constructor(_nome, _eta) {
        this.nome = _nome;
        this.eta = _eta;
    }
    comparaEta(altro) {
        if (this.eta > altro.eta) {
            console.log(`${this.nome} è più vecchio di ${altro.nome}.`);
            console.log(`${altro.nome} è più giovane di ${this.nome}.`);
        } else if (this.eta = altro.eta) {
            console.log(`${altro.nome} è della stessa età di ${this.nome}.`);
        }
    }
}

var p1 = new Person('Paolo', 25);
var p2 = new Person('Luca', 20);
var p3 = new Person('Mario', 20);

p1.comparaEta(p2);
p2.comparaEta(p3);