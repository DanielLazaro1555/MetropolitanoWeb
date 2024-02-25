// Definición de horarios comunes
const horarioRegularA = [
  "Lunes a sábado:<br> 5:00 a. m. - 11:00 p. m.",
  "Domingo:<br> 5:00 a. m. - 10:00 p. m.",
];

const horarioRegularB = [
  "Lunes a viernes:<br> 10:00 a. m. - 11:00 p. m.",
  "Sábado:<br> 5:00 a. m. - 11:00 p. m.",
  "Domingo:<br> 5:00 a. m. - 10:00 p. m.",
];

const horarioRegularC = [
  "Lunes a Sábado:<br> 05:00 a. m. - 11:00 p. m.",
  "Domingo:<br> 05:00 a. m. - 10:00 p. m.",
];

const horarioRegularD = ["Lunes a viernes:<br> 05:00 a. m. - 10:30 a. m."];

// Definición de servicios
const regularA = {
  titulo: "Regular A",
  horario: horarioRegularA,
};

const regularB = {
  titulo: "Regular B",
  horario: horarioRegularB,
};

const regularC = {
  titulo: "Regular C",
  horario: horarioRegularC,
};

const regularD = {
  titulo: "Regular D",
  horario: horarioRegularD,
};

const expreso1 = {
  titulo: "Expreso 1",
  horario: [
    "Lunes a viernes:<br>(Primer horario)<br>05:30 a. m. - 09:30 a. m.,<br>(Segundo horario)<br>05:40 p. m. - 09:30 p. m.",
    "Sábado:<br>(Primer horario)<br>06:30 a. m. - 09:30 a. m.,<br>(Segundo horario)<br>12:30 p. m. - 03:30 p. m.",
  ],
};

const expreso2 = {
  titulo: "Expreso 2",
  horario: [
    "Lunes a viernes:<br>05:00 a. m. - 09:00 a. m.",
    "Sábado:<br>06:00 a. m. - 09:00 a. m.",
  ],
};
const expreso3 = {
  titulo: "Expreso 3",
  horario: [
    "Lunes a viernes:<br>05:30 a. m. - 09:00 a. m.",
    "Sábado:<br>06:00 a. m. - 09:00 a. m.",
  ],
};
const expreso4 = {
  titulo: "Expreso 4",
  horario: ["Sábado:<br>05:15 a. m. - 08:20 p. m."],
};
const expreso5 = {
  titulo: "Expreso 5",
  horario: ["Lunes a viernes:<br>09:00 a. m. - 05:00 p. m."],
};
const expreso6 = {
  titulo: "Expreso 6",
  horario: ["Lunes a viernes:<br>05:30 a. m. - 10:00 a. m."],
};
const expreso7 = {
  titulo: "Expreso 7",
  horario: ["Lunes a viernes:<br>05:30 a. m. - 09:00 a. m."],
};
const expreso8 = {
  titulo: "Expreso 8",
  horario: ["Lunes a viernes:<br>05:00 p. m. - 08:20 p. m."],
};
const expreso9 = {
  titulo: "Expreso 9",
  horario: ["Lunes a viernes:<br>05:30 a. m. - 09:00 a. m."],
};
const expreso10 = {
  titulo: "Expreso 10",
  horario: ["Lunes a viernes:<br>06:00 a. m. - 09:00 a. m."],
};
const expreso11 = {
  titulo: "Expreso 11",
  horario: ["Lunes a viernes:<br>05:00 a. m. - 10:00 a. m."],
};
const expreso12 = {
  titulo: "Expreso 12",
  horario: ["Lunes a viernes:<br>05:45 a. m. - 10:00 a. m."],
};
const SuperExpreso = {
  titulo: "Super Expreso",
  horario: ["Lunes a viernes:<br>05:45 a. m. - 09:00 a. m."],
};
const SuperExpresoNorte = {
  titulo: "Super Expreso Norte",
  horario: ["Lunes a viernes:<br>05:00 p. m. - 09:00 p. m."],
};

const Lechucero = {
  titulo: "Lechucero",
  horario: ["Jueves a sábado:<br>11:30 p.m - 4:00 a.m"],
};

// Información sobre las estaciones
const estaciones = [
  {
    nombre: "LOS INCAS",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      expreso11,
    ],
  },
  {
    nombre: "ANDRÉS BELAUNDE",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      expreso11,
    ],
  },
  {
    nombre: "22 DE AGOSTO",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      expreso11,
    ],
  },
  {
    nombre: "UNIVERSIDAD",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      expreso11,
    ],
  },
  {
    nombre: "NARANJAL",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso2.titulo, horario: expreso2.horario },
      { titulo: expreso3.titulo, horario: expreso3.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
      { titulo: SuperExpreso.titulo, horario: SuperExpreso.horario },
      { titulo: SuperExpresoNorte.titulo, horario: SuperExpresoNorte.horario },
    ],
  },
  {
    nombre: "IZAGUIRRE",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
    ],
  },
  {
    nombre: "PACÍFICO",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso11.titulo, horario: expreso11.horario },
    ],
  },
  {
    nombre: "INDEPENDENCIA",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
    ],
  },
  {
    nombre: "LOS JAZMINES",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
    ],
  },
  {
    nombre: "TOMÁS VALLE",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso7.titulo, horario: expreso7.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
    ],
  },
  {
    nombre: "EL MILAGRO",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
    ],
  },
  {
    nombre: "HONORIO DELGADO",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
    ],
  },
  {
    nombre: "UNI",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
    ],
  },
  {
    nombre: "PARQUE DEL TRABAJO",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
    ],
  },
  {
    nombre: "CAQUETÁ",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
    ],
  },
  {
    nombre: "RAMÓN CASTILLA",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
    ],
  },
  {
    nombre: "TACNA",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
    ],
  },
  {
    nombre: "JIRÓN DE LA UNIÓN",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
    ],
  },
  {
    nombre: "COLMENA",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
    ],
  },
  {
    nombre: "DOS DE MAYO",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: SuperExpresoNorte.titulo, horario: SuperExpresoNorte.horario },
    ],
  },
  {
    nombre: "QUILCA",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: SuperExpresoNorte.titulo, horario: SuperExpresoNorte.horario },
    ],
  },
  {
    nombre: "ESPAÑA",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: SuperExpresoNorte.titulo, horario: SuperExpresoNorte.horario },
    ],
  },
  {
    nombre: "CENTRAL",
    mensajes: [
      { titulo: regularA.titulo, horario: regularA.horario },
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: regularD.titulo, horario: regularD.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso7.titulo, horario: expreso7.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: expreso10.titulo, horario: expreso10.horario },
      { titulo: expreso11.titulo, horario: expreso11.horario },
      { titulo: expreso12.titulo, horario: expreso12.horario },
      { titulo: SuperExpresoNorte.titulo, horario: SuperExpresoNorte.horario },
    ],
  },
  {
    nombre: "ESTADIO NACIONAL",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
    ],
  },
  {
    nombre: "MÉXICO",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
    ],
  },
  {
    nombre: "CANADÁ",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso2.titulo, horario: expreso2.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
    ],
  },
  {
    nombre: "JAVIER PRADO",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
      { titulo: expreso2.titulo, horario: expreso2.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso7.titulo, horario: expreso7.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: expreso12.titulo, horario: expreso12.horario },
    ],
  },
  {
    nombre: "CANAVAL Y MOREYRA",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso7.titulo, horario: expreso7.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: expreso12.titulo, horario: expreso12.horario },
      { titulo: SuperExpreso.titulo, horario: SuperExpreso.horario },
    ],
  },
  {
    nombre: "COMUNIDAD ANDINA / ARAMBURÚ",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: SuperExpreso.titulo, horario: SuperExpreso.horario },
    ],
  },
  {
    nombre: "DOMINGO ORUÉ",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
    ],
  },
  {
    nombre: "ANGAMOS",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
      { titulo: expreso3.titulo, horario: expreso3.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso7.titulo, horario: expreso7.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: expreso12.titulo, horario: expreso12.horario },
    ],
  },
  {
    nombre: "RICARDO PALMA",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso2.titulo, horario: expreso2.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: SuperExpreso.titulo, horario: SuperExpreso.horario },
    ],
  },
  {
    nombre: "BENAVIDES",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso3.titulo, horario: expreso3.horario },
      { titulo: expreso6.titulo, horario: expreso6.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
      { titulo: expreso12.titulo, horario: expreso12.horario },
    ],
  },
  {
    nombre: "28 DE JULIO",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
      { titulo: expreso2.titulo, horario: expreso2.horario },
      { titulo: expreso3.titulo, horario: expreso3.horario },
    ],
  },
  {
    nombre: "PLAZA DE FLORES",
    mensajes: [
      { titulo: regularB.titulo, horario: regularB.horario },
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso4.titulo, horario: expreso4.horario },
      { titulo: expreso5.titulo, horario: expreso5.horario },
      { titulo: expreso8.titulo, horario: expreso8.horario },
      { titulo: expreso9.titulo, horario: expreso9.horario },
    ],
  },
  {
    nombre: "BALTA",
    mensajes: [
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
    ],
  },
  {
    nombre: "BULEVAR",
    mensajes: [{ titulo: regularC.titulo, horario: regularC.horario }],
  },
  {
    nombre: "ESTADIO UNIÓN",
    mensajes: [{ titulo: regularC.titulo, horario: regularC.horario }],
  },
  {
    nombre: "ESCUELA MILITAR",
    mensajes: [{ titulo: regularC.titulo, horario: regularC.horario }],
  },
  {
    nombre: "FERNANDO TERÁN",
    mensajes: [{ titulo: regularC.titulo, horario: regularC.horario }],
  },
  {
    nombre: "ROSARIO DE VILLA",
    mensajes: [{ titulo: regularC.titulo, horario: regularC.horario }],
  },
  {
    nombre: "TERMINAL MATELLINI",
    mensajes: [
      { titulo: regularC.titulo, horario: regularC.horario },
      { titulo: expreso1.titulo, horario: expreso1.horario },
    ],
  },
];
// Función para generar las tarjetas de mensaje
function generarTarjetaMensaje(mensajes) {
  let html = "";
  mensajes.forEach((mensaje) => {
    html += `
        <div class="card-body">
          <div class="contenedor">
            <h3 class="card-title">${mensaje.titulo}</h3>
            <img src="Vehiculo_Mesa de trabajo 1.svg" alt="30px" style="max-width: 100px; height: auto;">
            <div class="horario">
              <p class="card-text">Horario</p>
              ${mensaje.horario
                .map(
                  (h) => `
                <p class="card-text">${h} (${
                    estaDisponibleEnHorario(mensaje.horario)
                      ? "Disponible"
                      : "Fuera de horario"
                  })</p>
              `
                )
                .join("")}
            </div>
          </div>
        </div>`;
  });
  return html;
}

function estaDisponibleEnHorario(horario) {
  const ahora = new Date();
  const diaSemana = ahora.getDay(); // 0 para domingo, 1 para lunes, ..., 6 para sábado
  const horaActual = ahora.getHours() * 100 + ahora.getMinutes(); // Convertir la hora actual a un formato comparable

  let horarioDisponible = false;

  // Verificar si la hora actual está dentro de algún horario disponible para el día actual
  horario.forEach((h) => {
    const diaHorario = h.split(":")[0]; // Extraer el día del horario (Lunes, Martes, etc.)
    if (
      diaHorario.includes(
        ahora.toLocaleString("en-US", { weekday: "long" }).slice(0, 3)
      )
    ) {
      const horariosDelDia = h.match(/\d{1,2}:\d{2}\s[a|p]\.m\./g); // Extraer los horarios del día actual
      horariosDelDia.forEach((horarioDia) => {
        const [horaInicio, horaFin] = horarioDia.split(" - ");
        const [horaInicioNum, minutoInicio] = horaInicio.split(":").map(Number);
        const [horaFinNum, minutoFin] = horaFin.split(":").map(Number);
        const horaInicioFormato24 =
          horaInicioNum +
          (horaInicio.includes("p.m.") && horaInicioNum !== 12 ? 12 : 0);
        const horaFinFormato24 =
          horaFinNum + (horaFin.includes("p.m.") && horaFinNum !== 12 ? 12 : 0);
        const horaInicioMinutos = horaInicioFormato24 * 100 + minutoInicio;
        const horaFinMinutos = horaFinFormato24 * 100 + minutoFin;

        if (horaActual >= horaInicioMinutos && horaActual <= horaFinMinutos) {
          horarioDisponible = true;
        }
      });
    }
  });

  return horarioDisponible;
}
// Generar tarjeta de mensaje para expreso1
const tarjetaMensajeExpreso1 = generarTarjetaMensaje([expreso1]);
console.log(tarjetaMensajeExpreso1);

$(document).ready(function () {
  const $estacionesContainer = $("#estaciones-container");

  // Generar tarjetas de mensaje para todas las estaciones
  estaciones.forEach((estacion, index) => {
    const estacionHTML = `
            <p class="estacion" style="display: none;">Estación: ${
              estacion.nombre
            }</p>
            <div class="card mensaje" style="display: none;">
                ${generarTarjetaMensaje(estacion.mensajes)}
            </div>
        `;
    $estacionesContainer.append(estacionHTML);
  });

  // Manejar el evento de cambio en el control de rango
  $("#rangoControl").on("input", function () {
    const valor = parseInt($(this).val());

    $(".estacion").hide().eq(valor).show();
    $(".mensaje").hide().eq(valor).show();
  });
});
