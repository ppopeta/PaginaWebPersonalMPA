const proyectos = [

{
nombre: "Página Web Personal",
descripcion: "Una página web hecha con HTML, CSS y JavaScript.",
link: "#"
},

{
nombre: "Sistema de Login",
descripcion: "Backend hecho con NestJS y autenticación JWT.",
link: "#"
},

{
nombre: "Chat con Sockets",
descripcion: "Aplicación de chat en tiempo real usando WebSockets.",
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