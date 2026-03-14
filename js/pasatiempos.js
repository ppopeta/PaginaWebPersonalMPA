const pasatiempos = [

{
titulo:"Ajedrez",
descripcion:"Juego que me encanta. Llevo estudiándolo desde abril de 2025 y actualmente aspiro a ser preseleccionada para los ASCUN.",
imagen:"../imagenes/chess.JPEG"
},

{
titulo:"Estudio de Idiomas",
descripcion:"Me gusta aprender nuevos idiomas y mejorar mis habilidades de comunicación.",
imagen:"../imagenes/idiomas.JPEG"
},

{
titulo:"Salir con Amigos",
descripcion:"Disfruto compartir tiempo con amigos, conversar y crear nuevos recuerdos.",
imagen:"../imagenes/amigos.JPEG"
},

{
titulo:"Inteligencia Artificial",
descripcion:"Me interesa estudiar inteligencia artificial, entender cómo funcionan los modelos y sus aplicaciones.",
imagen:"../imagenes/ia.jpg"
}

];

const contenedor = document.getElementById("contenedor-pasatiempos");

pasatiempos.forEach(pasatiempo => {

const tarjeta = document.createElement("div");
tarjeta.classList.add("tarjeta");

tarjeta.innerHTML = `
<img src="${pasatiempo.imagen}">
<div class="contenido">
<h2>${pasatiempo.titulo}</h2>
<p>${pasatiempo.descripcion}</p>
</div>
`;

contenedor.appendChild(tarjeta);

});