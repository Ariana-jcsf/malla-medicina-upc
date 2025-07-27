const cursos = [
  { nombre: "Estructura y Función", ciclo: 1 },
  { nombre: "Fundamentos de la Salud", ciclo: 1 },
  { nombre: "Ciencia y Tecnología", ciclo: 1 },
  { nombre: "Comunicación", ciclo: 1 },
  { nombre: "Psicología General", ciclo: 1 },
  { nombre: "Anatomía y Fisiología II", ciclo: 2 },
  { nombre: "Bioquímica", ciclo: 2 },
  { nombre: "Aprendizaje Estratégico", ciclo: 2 },
  { nombre: "Ética y Sistemas", ciclo: 2 },
  { nombre: "Microbiología", ciclo: 3 },
  { nombre: "Inmunología", ciclo: 3 },
  { nombre: "Farmacología", ciclo: 3 },
  // Agrega más cursos con su respectivo ciclo
];

const container = document.getElementById("mallaContainer");
const filtro = document.getElementById("cicloSelect");

function mostrarCursos(filtroCiclo) {
  container.innerHTML = "";

  const filtrados = filtroCiclo === "todos"
    ? cursos
    : cursos.filter(curso => curso.ciclo === parseInt(filtroCiclo));

  if (filtrados.length === 0) {
    container.innerHTML = "<p>No hay cursos para este ciclo.</p>";
    return;
  }

  filtrados.forEach(curso => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${curso.nombre}</h3><p>Ciclo: ${curso.ciclo}</p>`;
    container.appendChild(card);
  });
}

filtro.addEventListener("change", () => {
  mostrarCursos(filtro.value);
});

mostrarCursos("todos");
