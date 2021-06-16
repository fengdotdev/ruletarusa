const dummyparticipantes = [
  "piñera",
  "angello",
  "renato monster",
  "elsa capuntas",
  "silvia saint",
];
const arrayIngresoParticipantes = [];
const arrayParticipantes = [...arrayIngresoParticipantes];

const arrayDescartados = [];

const ruleta = (array) => {
  const numAzar = Math.floor(Math.random() * array.length) - 1;
  const elegido = array.numAzar;
  arrayDescartados = arrayParticipantes.splice(numAzar, numAzar);
  return elegido;
};

const resetear = () => {
  arrayParticipantes.concat(arrayDescartados);
  arrayDescartados = [];
  actualizarColumnas();
};

const cargarParticipantes = () => {
  const participantes = document.getElementById("participantes").value;
  arrayParticipantes = string.split(",");
  actualizarColumnas();
};

const mostrarElegido = (participante) => {
  document.getElementById("elegido").innerHTML = participante;
  actualizarColumnas();
};

const actualizarColumnas = () => {
  arrayParticipantes.forEach((participante) => {
    document.getElementById("disponibles").innerHTML += `
        <li class="list-group-item">${participante}</li>`;
  });
  arrayDescartados.forEach((participante) => {
    document.getElementById("descartados").innerHTML += `
        <li class="list-group-item">${participante}</li>`;
  });
};

document.querySelectorAll("button").forEach((boton) => {
  boton.addEventListener("click", () => {
    switch (boton.id) {
      case "reset":
        resetear();
        break;
      case "lanzar":
        mostrarElegido(ruleta(arrayParticipantes));
        break;
      case "agregar":
        cargarParticipantes();
        break;
    }
  });
});
