const estudios = [

{
titulo: "Ingeniería de Sistemas",
institucion: "Universidad del Cauca",
descripcion: "Actualmente cursando la carrera de ingeniería de sistemas, donde aprendo programación, bases de datos y desarrollo web."
},

{
titulo: "Bachillerato tecnico en desarrollo de software web",
institucion: "Colegio Comfandi Terranova",
descripcion: "Formación académica enfocada en matemáticas, lógica y ciencias y tegnología"
},
{
titulo: "Curso de IA innovador",
institucion: "Ministerio de las TICs",
descripcion: "Formación en el area de redes neuronales, aprendizaje automático y sus aplicaciones en el mundo real."
},
{
titulo: "Certificado de Ingles C2",
institucion: "Michigan EMichigan English Test (MET)",
descripcion: "Hecho en 2022, este certificado demuestra mi dominio avanzado del inglés, lo que me permite comunicarme eficazmente en entornos académicos y profesionales."
}

];

const contenedor = document.getElementById("contenedor-estudios");

estudios.forEach(estudio => {

const tarjeta = document.createElement("div");
tarjeta.classList.add("estudio");

tarjeta.innerHTML = `
<h2>${estudio.titulo}</h2>
<p class="institucion">${estudio.institucion}</p>
<p>${estudio.descripcion}</p>
`;

contenedor.appendChild(tarjeta);

});