//establece this utilizando call y pasar argumentos a la función
function saludar () {
    console.log(`hola, soy ${this.name} ${this.apellido}`);
}

const richard = {
    name: "richard",
    apellido: "benavides"
}

saludar.call(richard);

function camina (meters, direction) {
    console.log(`${this.name} camina ${meters} metros hacia el ${direction}.`)
}

//this entre parentesis y pasar los argumentos. 

camina.call(richard, 400, "norte");

//aply hace la misma función que call, pero los argumentosse pasan de forma diferente.

//en vez de pasarlos como argumentos separados los pasamos dentro de un array
//apply es mas fácil para una lista de valores

//camina.apply(richard, 800, "noreste");
const valores = [800, "noreste"]
camina.apply(richard, valores);

//bind no llama la función automaticammente, cre una nueva función

const daniel = {name: "daniel", apellido: "sanchez"};
daniel_saluda = saludar.bind(daniel);
daniel_saluda();

//para pasar argumentos en bind

const daniel_camina = camina.bind(daniel);
daniel_camina(1000, "este");

//otra forma de guardar argumentos

const daniel_camina1 = camina.bind(daniel, 2000, "sur");
daniel_camina1();

//tambien permite guardar argumentos parciales

//técnica  currYing

const daniel_camina2 = camina.bind(daniel, 2000);
daniel_camina2("oeste");

const buttons = document.getElementsByClassName("call-to-action");
// buttons.forEach(button => {
//     button.onclick =() => alert("Nunca dejes de aprender") 
// });

//nodeList

Array.prototype.forEach.call(buttons, button =>{
    button.onclick = () => alert ("Nuca dejes de aprender!")
});