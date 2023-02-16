const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const topbar = document.querySelector('.topbar');

function remove() {
  document.getElementById('toggle').checked = false;
  brand.classList.remove('blur');
  intro.classList.remove('blur');

  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.toggle('blur');
    intro.classList.toggle('blur');
  } else {
    hamburger.style.position = 'absolute';
    remove();
  }
}

let w = 0;
window.addEventListener('resize', () => {
  w = window.innerWidth;
  if (w > 768) {
    toggle();
    topbar.classList.remove('d-none');
    topbar.classList.toggle('d-flex');
  }
});
