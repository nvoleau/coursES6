//methode ce création class en es6
class  Person {

	let age =0;

    constructor(prenom, nom, age) {
        this.prenom = prenom;
        this.nom = nom;

    }

    getName() {
        return this.prenom + " " + this.nom;
    }


    setAge(year) {
        this.age = 2018 - year;
    }
}