const proyectos = [

{
nombre: "Clasificador de perros y gatos",
descripcion: "Mediante una red neuronal convolucional, clasifica imágenes de perros y gatos con una precisión del 95%.",
link: "https://github.com/ppopeta/Clasificacion-PerrosGatos-IA-Mintic-2026"
},

{
nombre: "Ajedrez con variantes",
descripcion: "Utilizando python se hizo un ajedrez con varias variantes, que utilizan el patron de diseño de microkernel, con el fin de facilitar la adición de nuevas variantes sin modificar el núcleo del juego.",
link: "https://github.com/ppopeta/chess_microkernel"
},

{
nombre: "Clasificador de numeros escritos a mano",
descripcion: "Utilizando una red neuronal convolucional, clasifica imágenes de números escritos a mano con una precisión del 98%.",
link: "#"
}

];

const contenedor = document.getElementById("contenedor-proyectos");

proyectos.forEach(proyecto => {

const tarjeta = document.createElement("div");
tarjeta.classList.add("proyecto");

tarjeta.innerHTML = `
<h2>${proyecto.nombre}</h2>
<p>${proyecto.descripcion}</p>
<a class="boton" href="${proyecto.link}">Ver proyecto</a>
`;

contenedor.appendChild(tarjeta);

});