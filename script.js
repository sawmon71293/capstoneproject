const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const hamburger = document.querySelector('.hamburger');
const singerWrap = document.querySelector('.singer-wrapper');
const allElements = document.querySelectorAll('.blurElement');
function notEmpty(element) {
  return element !== null;
}
function remove() {
  document.getElementById('toggle').checked = false;
  allElements.forEach((element) => {
    if (notEmpty(element)) {
      element.classList.remove('blur');
    }
  });
  brand.style.display = 'block';
  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.toggle('hide');
    brand.style.display = 'none';
    allElements.forEach((element) => {
      if (notEmpty(element)) {
        element.classList.toggle('blur');
      }
    });
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
    brand.style.display = 'block';
  }
});

function createSinger(singer) {
  const singerTemplate = ` <div class="singer d-flex mt-5">
  <div><img src="./img/${singer.featureImage}" alt="Lay Phyu" /></div>
  <div class="ms-5 singerFact">
    <h3>${singer.name}</h3>
    <p class="description">${singer.description}</p>
    <p class="singerDetail">
      ${singer.detail}
    </p>
  </div>
</div>`;

  singerWrap.innerHTML += singerTemplate;
}

window.onload = () => {
  toggle();
  const singers = [
    {
      name: 'Lay Phyu',
      description: 'Famous Rock Singer',
      featureImage: 'layphyu.jpg',
      detail:
        'A Burmese rock star and guitarist. He is the lead vocalist of the popular rock band Iron Cross. Lay is considered the most commercially successful male singer in the history of Burmese rock music.',
    },
    {
      name: 'Myo Gyi',
      description: 'Famous Rock Singer',
      featureImage: 'myoGyi.jpg',
      detail:
        'He is a singer who has been singing with the Iron Cross band for many years',
    },
    {
      name: 'R Zar Ni',
      description: 'Famous Pop Singer',
      featureImage: 'rzarni.jpg',
      detail:
        'He is best known for Burmese language covers of Western and Asian (Cantopop, Mandopop K-pop) pop songs',
    },
    {
      name: 'Ah Nge',
      description: 'Famous Rock Singer',
      featureImage: 'Ange.jpg',
      detail: 'Ah Nge is a famous rock singer in Myanmar.',
    },
  ];
  singers.forEach((singer, index) => {
    createSinger(singer, index);
  });
};
