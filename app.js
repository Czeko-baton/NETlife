// HEADER--------------------------------------------------------------------------------------------------
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const header = document.querySelector('header');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
  header.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

navbarLinks.addEventListener('click', () => {
  if (window.innerWidth <= 700) {
    navbarLinks.classList.toggle('active');
    header.classList.toggle('active');
    toggleButton.classList.toggle('active');
  }
});

// # smooth scroll ------------------
const links = document.querySelectorAll('.links');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prent default action
    e.preventDefault();

    //navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

// Carousell --------------------------------------------------------------------------------------------
const slides = document.querySelector('.slider').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let index = 0;

// buttons control -------------------------

prev.addEventListener('click', () => {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
});

next.addEventListener('click', () => {
  nextSlide();
  updateCircleIndicator();
  resetTimer();
});

const changeSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
};

// cirlce  indicators ---------------------

const circleIndicator = () => {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement('div');
    div.innerHTML = i + 1;
    div.setAttribute('onclick', 'indicateSlide(this)');
    div.id = i;
    if (i == 0) {
      div.className = 'active';
    }
    indicator.appendChild(div);
  }
};

circleIndicator();

const indicateSlide = (element) => {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
};

const updateCircleIndicator = () => {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove('active');
  }
  indicator.children[index].classList.add('active');
};

// autoplay slide -----------------------

const autoPlay = () => {
  nextSlide();
  updateCircleIndicator();
};

const resetTimer = () => {
  // when click to indicator or controls button
  // stop timer
  clearInterval(timer);
  // start timer again with full time
  timer = setInterval(autoPlay, 8000);
};

let timer = setInterval(autoPlay, 8000);

//  Blocks read more/less -----------------------------------------------------------------------------
const btn = document.querySelector('.read_more_btn');
const text = document.querySelector('.card_read_more');
const cardHolder = document.querySelector('.card_holder');

cardHolder.addEventListener('click', (e) => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('read_more_btn');
  if (!isReadMoreBtn) return;
  const currentText = e.target.parentNode.querySelector('.card_read_more');

  currentText.classList.toggle('card_read_more--open');

  current.textContent = current.textContent.includes('Read More...')
    ? 'Read Less...'
    : 'Read More...';
});

// set date ----------------------------------------------------------------------------------
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ssssss
// sadad
// bunm bumm
