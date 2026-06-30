document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
      if (mainNav.classList.contains('is-open')) {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '64px';
        mainNav.style.left = '0';
        mainNav.style.right = '0';
        mainNav.style.background = '#fff';
        mainNav.style.padding = '16px 20px';
        mainNav.style.borderBottom = '1px solid #f0f0f0';
      } else {
        mainNav.style.display = 'none';
      }
    });
  }
});
