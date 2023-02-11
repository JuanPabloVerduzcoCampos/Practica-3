// Practica 3 
function greet(){
    console.log("Hello");

}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);

let logGreetings = (miParametro) => miParametro();
logGreeting(function(){
    console.log("Hello from a function created on the fly");
});

//Interpolación de strings normal, o clasica
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola " + miNombre + " buenos dias! Tu color favorito es el " + miColor);
}

logGreeting1("Sofia", "rosa");

//Parametros del string
let color = "rosa";
let talla = "M";
let modelo = "Clasica";

//Con estas reprecentacion nos podemos dar cuenta de las diferencias que pueden tener una oracion sin concatnacion y con concatenacion, que la principal diferencia son las comillas y los signos de +.
console.log("Sofia tiene una playera talla" + talla + "de color" + color + "modelo" + modelo);
console.log(`Sofia tiene una playera 
talla ${talla}
de color ${color} 
modelo ${modelo}`);

//En esta practica nos podemos dar cuenta de las diferentes formas en declarar de concatenar oraciones, la concatenacion por medio de comillas invertidas nos permite tener un codigo mas limpio y ordenado