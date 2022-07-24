//esta es una manera ineficiente por que toca escribir
//una función para cada un de los objetos

// const zelda = {
//     name: "zelda"
// }
// zelda.saludar = function () {
//     console.log(`hola sor ${this.name}`)
// }
// zelda.saludar();
// const Link = {
//     name: "Link"
// }
// Link.saludar = function () {
//     console.log(`hola sor ${this.name}`)
// }
// Link.saludar();
//--------------------------------------

//forma eficiente

// function Hero(name) {
//     const hero = {
//         name: name
//     }
//     hero.saludar = function () {
//         console.log (`hola soy ${this.name}`);
//     }; 

//     return hero;
// }
//  const zelda = Hero("zelda")
//  zelda.saludar();

//  const Link = Hero("Link")
//  Link.saludar();

//-----------------------------------------


 //tener un objeto que tenga la colección de métodos para los heros

//  const heroMethods = {
//     saludar: function () {
//          console.log (`Me llamo ${this.name}`);
//      },
// };

// function Hero(name) {
//     const hero = {
//         name: name,
//     }
//     hero.saludar = heroMethods.saludar;
//     return hero;
// };

// const zelda = Hero("zelda")
// zelda.saludar();

// const Link = Hero("Link")
// Link.saludar();

//--------------------------------------


//Object.create

// const heroMethods = {
//     saludar: function () {
//          console.log (`Soy ${this.name}`);
//      },
// };

// function Hero(name) {
//     const hero = Object.create(heroMethods);
//     hero.name = name;
//     return hero;
// };

// const zelda = Hero("zelda")
// zelda.saludar();

// const Link = Hero("Link")
// Link.saludar();
//--------------------------------------



//los metodos de hero dentro de hero
//con prototype

    
// function Hero(name) {
//     const hero = Object.create(Hero.prototype);
//     hero.name = name;
//     return hero;
// };

// Hero.prototype.saludar = function () {
//     console.log (`Soy superheroe ${this.name}`);
// }

// const zelda = Hero("zelda")
// zelda.saludar();

// const Link = Hero("Link")
// Link.saludar();
//-------------------------------------


//new, siempre va a sacar el prototype de los que sea el constructor

function Hero(name) {
    // this = Object.create(Hero.prototype);
    this.name = name;
    // return this; (esto lo hace de manera automatica)
};

Hero.prototype.saludar = function () {
    console.log (`new: ${this.name}`);
}

const zelda = new Hero("zelda")
zelda.saludar();

const Link = new Hero("Link")
Link.saludar();