/** @format */

const toggleBar = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar-con');
const progress = document.querySelector('.progress');
const percentage = document.querySelector('.progress span');
const header = document.querySelector('.navigation');

function stickNav() {
   header.classList.toggle('sticky', window.scrollY > 100);
}

window.addEventListener('scroll', () => {
   stickNav();
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
