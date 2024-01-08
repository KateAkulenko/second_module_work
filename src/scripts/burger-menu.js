function burger () {
  const burgerIcon = document.getElementById('js-burger');
  const nav = document.getElementById('js-aside-menu');

  burgerIcon.addEventListener('click', function () {
      nav.classList.toggle('active');
      burgerIcon.classList.toggle('active-x');
  });
};

export default burger;
