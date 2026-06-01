//sobre mi 

const texto = `> Hola, soy Matias Barú.
> Desarrollador web junior apasionado por el diseño.
> 
> Objetivos:
>  - Crecer como desarrollador full stack
>  - Trabajar en proyectos creativos e innovadores
> 
> Conocimientos:
>  - HTML, CSS, JavaScript
>  - Git & GitHub
>  - NestJS, Python
> 
> _`;

let index = 0;
let intervalo;

function abrirTerminal() {
  const terminal = document.getElementById('terminal');
  const textoEl  = document.getElementById('terminal-texto');

  terminal.style.display = 'block';
  textoEl.textContent = '';
  index = 0;
  clearInterval(intervalo);

  intervalo = setInterval(() => {
    textoEl.textContent += texto[index];
    index++;
    if (index >= texto.length) clearInterval(intervalo);
  }, 30); // velocidad: menos número = más rápido
}

//CURSO

document.querySelectorAll('.video-overlay').forEach(overlay => {
  overlay.addEventListener('click', function() {
    this.classList.add('oculto');
  });
});

document.querySelectorAll('.video-overlay').forEach(overlay => {
  overlay.addEventListener('click', function() {
    this.classList.add('oculto');
  });
});