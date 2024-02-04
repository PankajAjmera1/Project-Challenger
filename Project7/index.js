
const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center ul');

navToggle.addEventListener('click', () => {
  navCenter.classList.toggle('show');
});