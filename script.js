document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      checkbox.disabled = true; // deshabilita el checkbox al marcarlo
    });
  });
});
