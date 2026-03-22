const form = document.getElementById("formContacto");

form.addEventListener("submit", async function(e){

e.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const correo = document.getElementById("correo").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();

if(nombre === "" || correo === "" || mensaje === ""){
    
    alert("⚠️ Debes completar todos los campos antes de enviar el formulario");
    return;

}

alert("Formulario enviado correctamente");
   
form.reset();

});
