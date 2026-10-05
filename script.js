let listaDeSuper = [];

listaDeSuper.push("Leche");

listaDeSuper.push("Pan");

listaDeSuper.push("Huevos");

listaDeSuper.push("Arroz");

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log(listaDeSuper[ultimoElemento]);

listaDeSuper.push("Jamón");
listaDeSuper.push("pan");

listaDeSuper.unshift("Coca");
listaDeSuper.unshift("atún");

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();

let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);