const malla = [
  {
    ciclo: "1er ciclo",
    cursos: ["Anatomía Humana I", "Biología", "Química General"]
  },
  {
    ciclo: "2do ciclo",
    cursos: ["Fisiología", "Química Orgánica", "Bioética"]
  }
  // puedes agregar más ciclos
];

const container = document.getElementById("malla-container");

malla.forEach(({ ciclo, cursos }) => {
  const div = document.createElement("div");
  div.classList.add("ciclo");
  div.innerHTML = `<h2>${ciclo}</h2><ul>${cursos.map(c => `<li>${c}</li>`).join("")}</ul>`;
  container.appendChild(div);
});
