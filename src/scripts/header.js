document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      header.style.backgroundColor = '#55B7FF';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
});
