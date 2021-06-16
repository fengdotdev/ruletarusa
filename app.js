const dummyparticipantes = [
  "piñera",
  "angello",
  "renato monster",
  "elsa capuntas",
  "silvia saint",
  "johny sins",
];

let arrayParticipantes = [];
let arrayDescartados = [];

const ruleta = (array) => {
  if (arrayParticipantes.length < 1) {
    alert("No queda más gente. Qué pena.");
    return;
  }
  const numAzar = Math.floor(Math.random() * array.length);
  const elegido = array[numAzar];
  arrayDescartados.push(arrayParticipantes.splice(numAzar, 1));
  return elegido;
};

// const animacionNombres = () => {
//   let numAzar;
//   for (let index = 0; index < 10; index++) {}
// };
// const elementoAnimacion = () => {
//   setTimeout(() => {
//     numAzar = Math.floor(Math.random() * arrayParticipantes.length);
//     let elegido = arrayParticipantes[numAzar];
//     document.getElementById("elegido").innerHTML = elegido;
//     console.log(numAzar);
//   }, 100);
// };

const resetear = () => {
  arrayParticipantes = arrayParticipantes.concat(arrayDescartados);
  arrayDescartados = [];
  document.getElementById("elegido").innerHTML = "";
  actualizarColumnas();
};

const cargarParticipantes = () => {
  let participantes = document.getElementById("participantes").value;
  arrayParticipantes = participantes.split("\n");
  document.getElementById("participantes").value = "";
  actualizarColumnas();
};

const mostrarElegido = (participante) => {
  if (participante) {
    document.getElementById("elegido").innerHTML = participante;
    actualizarColumnas();
  }
};

const devolver = () => {
  arrayParticipantes.push(arrayDescartados.pop());
  actualizarColumnas();
};

const actualizarColumnas = () => {
  document.getElementById(
    "disponibles"
  ).innerHTML = `<li class="list-group-item"> </li>`;

  arrayParticipantes.forEach((participante) => {
    document.getElementById("disponibles").innerHTML += `
        <li class="list-group-item">${participante}</li>`;
  });

  document.getElementById(
    "descartados"
  ).innerHTML = `<li class="list-group-item"> </li>`;
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
      case "devolver":
        devolver();
        break;
    }
  });
});
