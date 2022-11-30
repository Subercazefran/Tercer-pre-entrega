let productos = [
  {
    id: 1,
    nombre: "Rollo de canela",
    cantidad: 10,
    img: "./images/canela.jpg",
    desc: "El anhelado rollo de canela en tus manos.",
    precio: "$ 245",
  },
  {
    id: 2,
    nombre: "dona rellena",
    cantidad: 10,
    img: "./images/rellena.jpg",
    desc: "Dona rellena de exquisito  chocolate.",
    precio: "$ 232",
  },
  {
    id: 3,
    nombre: "Dona de frambuesa",
    cantidad: 10,
    img: "./images/frambuesa.jpg",
    desc: "El anhelado rollo de canela en tus manos.",
    precio: "$ 235",
  },
  {
    id: 4,
    nombre: "Dona de oreo",
    cantidad: 10,
    img: "./images/oreo.jpg",
    desc: "La media docena mas codiciada de nuestra franquicia.",
    precio: "$ 232",
  },
  {
    id: 5,
    nombre: "Batidos",
    cantidad: 10,
    img: "./images/milkshake.jpg",
    desc: " Podes llevar todas las que queres surtidas! Cambia el precio segun region.",
    precio: "$ 330",
  },
  {
    id: 6,
    nombre: "Media docena",
    cantidad: 10,
    img: "./images/media.jpg",
    desc: "La mejor frambuesa de la zona, desde el campo a la mesa.",
    precio: "$ 340",
  },
];

let body = "";

let carrito = [];

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
  console.log(carrito);
};

const actualizarCarrito = () => {
  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.className = "productoEnCarrito";
    div.innerHTML`
    <p>${prod.nombre}</p>
    <p>Precio: ${prod.precio}</p>
    <p>Cantidad: <span id="cantidad"> ${prod.cantidad} </span></p>
    <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"></button>
    `;
    con;
  });
};
