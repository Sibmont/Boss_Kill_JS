// Opciones de armas
const Hacha = {
  nombre: "Hacha",
  ataque: 2,
  chance: 4,
};

const Garra = {
  nombre: "Garra",
  ataque: 3,
  chance: 3,
};

const Maso = {
  nombre: "Maso",
  ataque: 5,
  chance: 2,
};

const Espada = {
  nombre: "Espada",
  ataque: 7,
  chance: 1,
};

// Selección del usuario
let arma;

while (true) {
  let seleccion = prompt(
    "Elije tu arma de preferencia:\n1. Hacha\n2. Garra\n3. Maso\n4. Espada"
  );
  switch (seleccion) {
    case "1":
    case "hacha":
    case "Hacha":
      arma = Hacha;
      break;

    case "2":
    case "garra":
    case "Garra":
      arma = Garra;
      break;

    case "3":
    case "maso":
    case "Maso":
      arma = Maso;
      break;

    case "4":
    case "espada":
    case "Espada":
      arma = Espada;
      break;

    default:
      alert("Selección inválida! Por vafor, selecciona un arma de la lista.");
      continue;
  }
  alert(
    `Tu arma ${arma.nombre} tiene un ataque de: ${arma.ataque}, y una posibilidad de golpear de: ${arma.chance}/4`
  );
  break;
}

// Atacar al enemigo
let vidaEnemigo = 20;

const golpearEnemigo = (vidaEnemigo, arma) => {
  alert(`La vida inicial del enemigo es de: ${vidaEnemigo}`);
  let vidaActualEnemigo = vidaEnemigo;
  for (let i = 0; i <= vidaEnemigo; i++) {
    alert("Presiona Enter para atacar");
    if (arma.chance >= Math.floor(Math.random() * 4)) {
      vidaActualEnemigo -= arma.ataque;
      alert(`Golpeaste al enemigo, su vida ahora es de: ${vidaActualEnemigo}`);
    } else {
      alert(`Fallaste! Su vida sigue siendo ${vidaActualEnemigo}`);
    }

    if (vidaActualEnemigo <= 0) {
      alert("Mataste al enemigo!");
      break;
    }
  }
};

golpearEnemigo(vidaEnemigo, arma);
