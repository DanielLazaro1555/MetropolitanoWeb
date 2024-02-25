// Activar el toast al cargar la página
var toastEl = document.querySelector(".custom-toast");
var toast = new bootstrap.Toast(toastEl);
toast.show();

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene el elemento del toast por su clase
  var toastElement = document.querySelector(".toast");

  // Función para actualizar el contenido del toast con la hora actual
  function updateToastContent() {
    var now = new Date(); // Obtiene la hora actual
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds; // Formatea la hora

    // Actualiza el contenido del toast con la hora actual
    var toastBody = toastElement.querySelector(".toast-body");
    toastBody.textContent = "Hora actual: " + formattedTime;
  }

  // Actualiza el contenido del toast al cargar la página
  updateToastContent();

  // Actualiza el contenido del toast cada segundo
  setInterval(updateToastContent, 1000);
});

// Obtener el elemento donde se mostrará la fecha y hora
const fechaHoraActualElemento = document.getElementById("fecha-hora-actual");

// Obtener la fecha y hora actual
const fechaHoraActual = new Date();

// Formatear la fecha y hora actual como una cadena
const fechaHoraActualFormateada = fechaHoraActual.toLocaleString("es-ES", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Actualizar el contenido del elemento con la fecha y hora actual formateada
fechaHoraActualElemento.textContent = fechaHoraActualFormateada;
