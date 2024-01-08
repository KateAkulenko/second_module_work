document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById('js-hamburger');
  const nav = document.getElementById('js-aside-menu');

  burgerIcon.addEventListener('click', function () {
      nav.classList.toggle('active');
  });
});