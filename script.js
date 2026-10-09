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

let productos = ["Sal", "Leche", "Arroz"];

function logItems(arreglo) {
  arreglo.forEach((producto, indice) => {
    console.log(`${indice}: ${producto}`);
  });
}

function mostrarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  productos.forEach((producto, indice) => {
    let item = document.createElement("li");
    item.textContent = `${indice}: ${producto} `;

    let boton = document.createElement("button");
    boton.textContent = "Borrar";
    boton.onclick = function () {
      borrar(indice);
    };

    item.appendChild(boton);
    lista.appendChild(item);
  });
}

function nuevo() {
  let input = document.getElementById("producto");
  let producto = input.value.trim();

  if (producto !== "") {
    productos.push(producto);
    input.value = "";
    mostrarLista();
  }
}

function borrar(indice) {
  let eliminado = productos.splice(indice, 1);
  console.log("Producto eliminado: " + eliminado[0]);
  mostrarLista();
}

mostrarLista();
logItems(productos);
