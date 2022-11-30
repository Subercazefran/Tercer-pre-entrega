let productos = [
  {
    id: 1,
    nombre: "Rollo de canela",
    cantidad: 1,
    img: "./images/canela.jpg",
    desc: "El anhelado rollo de canela en tus manos.",
    precio: "$ 245",
  },
  {
    id: 2,
    nombre: "dona rellena",
    cantidad: 1,
    img: "./images/rellena.jpg",
    desc: "Dona rellena de exquisito  chocolate.",
    precio: "$ 232",
  },
  {
    id: 3,
    nombre: "Dona de frambuesa",
    cantidad: 1,
    img: "./images/frambuesa.jpg",
    desc: "El anhelado rollo de canela en tus manos.",
    precio: "$ 235",
  },
  {
    id: 4,
    nombre: "Dona de oreo",
    cantidad: 1,
    img: "./images/oreo.jpg",
    desc: "La media docena mas codiciada de nuestra franquicia.",
    precio: "$ 232",
  },
  {
    id: 5,
    nombre: "Batidos",
    cantidad: 1,
    img: "./images/milkshake.jpg",
    desc: " Podes llevar todas las que queres surtidas! Cambia el precio segun region.",
    precio: "$ 330",
  },
  {
    id: 6,
    nombre: "Media docena",
    cantidad: 1,
    img: "./images/media.jpg",
    desc: "La mejor frambuesa de la zona, desde el campo a la mesa.",
    precio: "$ 340",
  },
];

let body = "";
const contenedorCarrito = document.getElementById("carrito-contenedor");

const botonVaciar = document.getElementById("vaciar-carrito");

const precioTotal = document.getElementById("precioTotal");

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
});

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

productos.forEach((el) => {
  body += `
      <div class=" donas">
        <img src=${el.img} class="imagenes " ></img>
        <div>
          <h4 class="donas__titulo">${el.nombre}</h4>
          <p class= "donas__parrafo"> ${el.desc}</p>
          <p class= "donas__parrafo"> ${el.precio}</p>
          <button id=${el.id} class="boton-agregar" onclick=agregarAlCarrito(${el.id}) >Comprar</button>
        </div>
      </div>
  `;
  let boton = document.getElementById(`agregar${el.id}`);
});

document.getElementById("contenedor").innerHTML = body;

const agregarAlCarrito = (prodId) => {
  const item = productos.find((producto) => producto.id === prodId);
  carrito.push(item);
  actualizarCarrito();
  console.log(carrito);
};

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarCarrito();
};
const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad"> ${prod.cantidad} </span></p>
    <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"></button>
    `;
    contenedorCarrito.appendChild(div);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  });
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
};
