function convertirNumerosAPalabras(texto) {
  const numerosAPalabras = {
    0: "Los Incas",
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve",
  };

  return texto.replace(/\d+/g, (match) => numerosAPalabras[match]);
}

document.addEventListener("DOMContentLoaded", function () {
  var valorSeleccionado = document.getElementById("valorSeleccionado");
  var mensaje = document.getElementById("mensaje");

  document
    .getElementById("rangoControl")
    .addEventListener("input", function () {
      var valor = this.value;
      var estacion = convertirNumerosAPalabras(valor);
      valorSeleccionado.textContent = "Estación: " + estacion;

      // Mostrar mensaje para diferentes estaciones
      switch (estacion.toLowerCase()) {
        case "los incas":
          mensaje.innerHTML = `<div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <div class="contenedor">
                                    <h5 class="card-title">Regular B</h5>
                                    <img src="Vehiculo_Mesa de trabajo 1.svg" alt="30px" style="max-width: 100px; height: auto;">
                                    <div class="horario">
                                        <p class="card-text">Horario</p>
                                        <p class="card-text">Lunes a viernes: <br> 05:00 a. m. - 10:00 a. m.</p>
                                        <p class="card-text">Sábado: <br> 5:00 a. m. - 11:00 p. m.</p>
                                        <p class="card-text">Domingo: <br> 5:00 a. m. - 10:00 p. m.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <div class="contenedor">
                                    <h5 class="card-title">Expreso 11</h5>
                                    <img src="Vehiculo_Mesa de trabajo 1.svg" alt="30px" style="max-width: 100px; height: auto;">
                                    <div class="horario">
                                        <p class="card-text">Horario</p>
                                        <p class="card-text">Lunes a viernes: <br> 05:00 a. m. - 10:00 a. m.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
          break;
        case "andrés belaunde":
          mensaje.innerHTML = "<p>Mensaje para Andrés Belaunde</p>";
          break;
        case "otra estación":
          mensaje.innerHTML = "<p>Mensaje para Otra Estación</p>";
          break;
        // Agregar más casos según sea necesario
        default:
          mensaje.innerHTML = "<p>Mensaje para cualquier otra estación</p>";
      }

      mensaje.style.display = valor >= 0 && valor <= 5 ? "block" : "none";
    });

  document.getElementById("horario1").textContent = convertirNumerosAPalabras(
    document.getElementById("horario1").textContent
  );
  document.getElementById("horario2").textContent = convertirNumerosAPalabras(
    document.getElementById("horario2").textContent
  );
});
