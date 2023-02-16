const brand = document.querySelector('.brand');
const checkbox = document.querySelector('#toggle');
const intro = document.querySelector('.intro');
const hamburger = document.querySelector('.hamburger');
const concert = document.querySelector('.concert');
const aboutPast = document.querySelector('.about-past');
const concertWrap = document.querySelector('.concert-wrap');
const singerWrap = document.querySelector('.singer-wrapper');
const mainProgram = document.querySelector('.mainProgram');
const featureSingers = document.querySelector('.featureSingers');
const partners = document.querySelector('.partners');
const footerWrap = document.querySelector('.footer-wrap');
const detailWrap = document.querySelector('.detail-wrap');

function notEmpty(element) {
  return element !== null;
}
function remove() {
  document.getElementById('toggle').checked = false;
  if (notEmpty(intro)) {
    intro.classList.remove('blur');
  }
  if (notEmpty(mainProgram)) {
    mainProgram.classList.remove('blur');
  }
  if (notEmpty(featureSingers)) {
    featureSingers.classList.remove('blur');
  }

  if (notEmpty(partners)) {
    partners.classList.remove('blur');
  }
  if (notEmpty(footerWrap)) {
    footerWrap.classList.remove('blur');
  }
  if (notEmpty(detailWrap)) {
    detailWrap.classList.remove('blur');
  }

  if (notEmpty(concert)) {
    concert.classList.remove('blur');
  }
  if (notEmpty(aboutPast)) {
    aboutPast.classList.remove('blur');
  }
  if (notEmpty(concertWrap)) {
    concertWrap.classList.remove('blur');
  }

  brand.style.display = 'block';
  hamburger.style.position = 'absolute';
}

function toggle() {
  if (checkbox.checked) {
    hamburger.style.position = 'fixed';
    brand.classList.toggle('hide');
    if (notEmpty(intro)) {
      intro.classList.toggle('blur');
    }
    if (notEmpty(mainProgram)) {
      mainProgram.classList.toggle('blur');
    }
    if (notEmpty(featureSingers)) {
      featureSingers.classList.toggle('blur');
    }

    if (notEmpty(partners)) {
      partners.classList.toggle('blur');
    }
    if (notEmpty(footerWrap)) {
      footerWrap.classList.toggle('blur');
    }
    if (notEmpty(detailWrap)) {
      detailWrap.classList.toggle('blur');
    }

    if (notEmpty(concert)) {
      concert.classList.toggle('blur');
    }
    if (notEmpty(aboutPast)) {
      aboutPast.classList.toggle('blur');
    }
    if (notEmpty(concertWrap)) {
      concertWrap.classList.toggle('blur');
    }
    brand.style.display = 'none';
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
