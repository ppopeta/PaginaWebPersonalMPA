console.log("Efectivamente el JS esta cargando!");

const slider = document.getElementById("slider");

slider.addEventListener("wheel", (event) => {

    event.preventDefault();

    slider.scrollLeft += event.deltaY;

});