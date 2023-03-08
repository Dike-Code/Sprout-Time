/** @format */

const toggleBar = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar-con');
const progress = document.querySelector('.progress');
const percentage = document.querySelector('.progress span');
const header = document.querySelector('.navigation');
const stickyLogo = document.querySelector('.nav-logo');

function stickNav() {
   header.classList.toggle('sticky', window.scrollY > 100);
   if (header.classList.contains('sticky')) {
      stickyLogo.classList.add('stick');
   } else {
      stickyLogo.classList.remove('stick');
   }
}

window.addEventListener('scroll', () => {
   stickNav();
});

window.addEventListener('DOMContentLoaded', () => {
   new Splide('.splide', {
      type: 'loop',
      autoplay: true,
      interval: 6000,
      arrows: false,
      pagination: false,
      wheel: true,
      pauseOnHover: false,
      speed: 2000,
   }).mount();
});

toggleBar.addEventListener('click', (e) => {
   navbar.classList.toggle('active');
});

let per = 0;
function progressLoad() {
   if (per >= 80) {
      progress.style.width = `80%`;
      percentage.innerHTML = '80%';
   } else {
      progress.style.width = `${per}%`;
      percentage.innerHTML = `${per}%`;
   }
   per++;
}

setInterval(progressLoad, 90);
