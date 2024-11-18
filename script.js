// Efecto de clic en los recuadros de la página principal
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        window.location.href = item.dataset.target;
      }, 150);
    });
  });
  
  // Animación de entrada para las secciones con fade-in
  window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(section => {
      section.style.opacity = '1';
      section.style.transition = 'opacity 1.5s ease';
    });
  });
  
  // Añadir dinamismo a las listas
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach((item, index) => {
    item.style.opacity = '0';
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
      item.style.transform = 'translateX(0)';
    }, index * 200);
  });
  
  // Botón interactivo "Volver arriba" para cada página
  const goTopButton = document.createElement('button');
  goTopButton.id = 'go-top';
  goTopButton.innerText = '↑';
  document.body.appendChild(goTopButton);
  
  // Mostrar/Ocultar el botón dependiendo del scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      goTopButton.style.display = 'block';
    } else {
      goTopButton.style.display = 'none';
    }
  });
  
  // Acción del botón "Volver arriba"
  goTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  