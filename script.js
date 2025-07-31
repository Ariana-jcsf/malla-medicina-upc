const cursos = {
  1: [
    { codigo: 'HU712', nombre: 'Aprendizaje Estratégico y Liderazgo', creditos: 3 },
    { codigo: 'HU705', nombre: 'Crítica y Comunicación', creditos: 3 },
    { codigo: 'ME403', nombre: 'Estructura y Función', creditos: 4 },
    { codigo: 'ME404', nombre: 'Fundamentos de la Salud', creditos: 2 },
    { codigo: 'HU713', nombre: 'Pensamiento Crítico Aplicado', creditos: 3 },
    { codigo: 'HU706', nombre: 'Sistemas y Sociedad', creditos: 3 }
  ],
  2: [
    { codigo: 'ME458', nombre: 'IA e Investigación Científica', creditos: 2 },
    { codigo: 'ME460', nombre: 'Procesos Biológicos 1', creditos: 4 },
    { codigo: 'ME438', nombre: 'Práctica Médica: SN y Tegumentario', creditos: 3 },
    { codigo: 'ME442', nombre: 'Sistema Nervioso', creditos: 3 },
    { codigo: 'ME405', nombre: 'Sistema Tegumentario', creditos: 2 }
  ],
  // Puedes seguir agregando hasta el ciclo 14
};

function crearCurso(curso, ciclo) {
  const div = document.createElement('div');
  div.classList.add('curso');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `${curso.codigo}`;

  checkbox.addEventListener('change', () => {
    div.classList.toggle('completado', checkbox.checked);
  });

  const label = document.createElement('label');
  label.setAttribute('for', curso.codigo);
  label.innerHTML = `<span>${curso.codigo} – ${curso.nombre}</span> <span class="creditos">${curso.creditos} cr</span>`;

  div.appendChild(checkbox);
  div.appendChild(label);
  return div;
}

function cargarMalla() {
  const contenedor = document.getElementById('malla-container');
  for (let ciclo in cursos) {
    const divCiclo = document.createElement('div');
    divCiclo.classList.add('ciclo');
    const titulo = document.createElement('h2');
    titulo.textContent = `Ciclo ${ciclo}`;
    divCiclo.appendChild(titulo);

    cursos[ciclo].forEach(curso => {
      const cursoDiv = crearCurso(curso, ciclo);
      divCiclo.appendChild(cursoDiv);
    });

    contenedor.appendChild(divCiclo);
  }
}

document.addEventListener('DOMContentLoaded', cargarMalla);
