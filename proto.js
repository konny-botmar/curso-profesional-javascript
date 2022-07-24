function hero(name) {
    this.name = name;
}

hero.prototype.saludar = function () {
    console.log (`hola, soy ${this.name}.`);
};

const zelda = new hero("zelda");


//propiedades de la instancia: name
console.log("name:", zelda.name);

//propiedades de la clase
console.log("saludar:", zelda.saludar);

//propiedades heredadas 
console.log("toString:", zelda.toString);

//hasOwnProperty método para inspeccionar si eso 
//le pertenece directamente a un objeto
// o si lo toma prestamo a traves de herencia
//aparece tru si es propio y false si es prestado
console.log(
    `zelda.hasOwnProperty("saludar"):`, 
    zelda.hasOwnProperty("saludar")
);

