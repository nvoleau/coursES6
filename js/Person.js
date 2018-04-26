//methode ce création class en es5
function Person (nom,prenom){

	this.prenom = prenom;
	this.nom=nom;
}

Person.prototype.getName = function(){
	return this.prenom+" "+this.nom;
}