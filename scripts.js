document.addEventListener("DOMContentLoaded", function() {
    // Obtener la fecha de finalización (puedes cambiarla a la fecha que desees)
    const fechaFinalizacion = new Date("February 28, 2024 23:59:59").getTime();

    // Actualizar el contador cada segundo
    const intervalo = setInterval(function() {
        // Obtener la fecha y hora actual
        const ahora = new Date().getTime();
        
        // Calcular la diferencia entre la fecha de finalización y la fecha actual
        const diferencia = fechaFinalizacion - ahora;
        
        // Calcular los días, horas, minutos y segundos restantes
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        // Mostrar los valores en los elementos HTML
        document.getElementById("dias").innerHTML = dias;
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;
        
        // Si la cuenta regresiva ha terminado, detener el intervalo
        if (diferencia < 0) {
            clearInterval(intervalo);
            document.getElementById("contador").innerHTML = "EXPIRADO";
        }
    }, 1000);
});

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementsByClassName("boton2")[0];

// Obtener el botón de cerrar (X)
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en (X), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}