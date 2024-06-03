
// Un comentario de una línea

/*
    Un comentario multi línea...
    que en este caso
    voy a poner en práctica

*/

console.log("Hola mundo, por fin empezamos algo interesante");

//Esto es la declaración
var box1;

console.log(box1);

//Esto es una asignación
box1 = 2;

console.log(box1);

box1 = "Gnocci con bacon";

console.log(box1);

var box2 = 4;

//Si lo que dice en la línea 30 se considera true o verdad, ejecutará el if, en caso contrario lo saltará.
if(box1 == box2){
    console.log("El valor de box1 y el de box2 son idénticos");
};

var variable1 = "4";
var variable2 = 4;

if(variable1 == variable2){
    console.log("Esto entra???????");
};

//Esto sería una comparación estricta, con 3 iguales, han de ser idénticos en tipo y valor.
if(variable1 === variable2){
    console.log("Guillermo que sabe?'??");
};

var interruptor = false;

// if(!interruptor){
if(interruptor == false){
    interruptor = true;
    console.log("Se ha encendido la luz");
};


var frase = "Soy una frase de azucarillo";

var frase2 = 'También soy una frase de azucarillo';

var coche = null;

//El valor null se considera un valor falsy
if(!coche){
    console.log("Me duele la cabeza con JS");
};
console.log(typeof(variable2));
/////////////////////////////////////////////////////

//OPERADORES LÓGICOS//

var nombre = "Guillermo";
var edad = 24;
var ciudad = "Valencia";
var autonomo = false;

if(nombre != "Guillermo"){
    console.log("hola");
};

if(nombre == "Guillermo"){
    console.log("Hola Guillermo");
};

if(edad > 18 || autonomo == true){
    console.log("A pagar hahahhaha");
};

if((ciudad == "Valencia") && (edad == 24)){
    console.log("Muy bien!");
};

if((ciudad == "Valencia" && edad == 24) && (nombre == "Guillermo" || autonomo == true)){
    console.log("uffffffffffff");
};

//Operaciones de Asignación

var nuevoNumero = 10;

nuevoNumero = nuevoNumero + 5;

//Esto es exactamente lo mismo que lo de arriba

nuevoNumero += 5;

var miEdad = 18;

if(miEdad >= 18){
    console.log("puedo sacarme el carnet de conducir");
};