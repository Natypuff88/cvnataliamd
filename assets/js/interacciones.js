const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Agrega un evento de clic al botón
dropdownButton.addEventListener('click', () => {
  // Alterna la clase "show" para mostrar u ocultar el contenido
  dropdownContent.classList.toggle('show');
});

// Cierra el dropdown si se hace clic fuera de él
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-button')) {
    dropdownContent.classList.remove('show');
  }
});