//methode ce création class en es5
function Person (nom,prenom){

	this.prenom = prenom;
	this.nom=nom;
	this.age=0;
}

Person.prototype.getName = function(){
	return this.prenom+" "+this.nom;
}

Person.prototype.setAge = function(year){
    this.age=2018-year;
}