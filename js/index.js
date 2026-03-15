console.log("Efectivamente el JS esta cargando!");

const carrusel = document.getElementById("carrusel");

document.querySelector(".izquierda").addEventListener("click", () => {
    carrusel.scrollBy({
        left: -400,
        behavior: "smooth"
    });
});

document.querySelector(".derecha").addEventListener("click", () => {
    carrusel.scrollBy({
        left: 400,
        behavior: "smooth"
    });
});

const links = [
    {
    nombre: "GitHub",
    url: "https://github.com/ppopeta"
    },
    {
    nombre: "Steam",
    url: "https://steamcommunity.com/profiles/76561199442800009/"
    },
    {
    nombre: "Correo",
    tipo: "correo",
    email: "bibianacortes@unicauca.edu.co"
    },
    {
    nombre: "Lichess",
    url: "https://lichess.org/@/ppopetaa"
    }
];

const contenedor = document.getElementById("links-caja");

links.forEach(link => {

const enlace = document.createElement("a");

enlace.textContent = link.nombre;
enlace.classList.add("link-item");

if(link.tipo === "correo"){
    enlace.href = "#";
    enlace.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(link.email);
        const mensaje = document.getElementById("mensaje-copiado");
        mensaje.classList.add("mostrar");
        setTimeout(() => {
            mensaje.classList.remove("mostrar");
        }, 2000);
    });
}else{
    enlace.href = link.url;
    enlace.target = "_blank";
}
contenedor.appendChild(enlace);
});