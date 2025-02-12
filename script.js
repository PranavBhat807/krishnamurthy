// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

console.log('Locomotive Scroll initialized:', scroll);

// Handle scroll behavior for navbar
const logo = document.getElementById('logo');
const navbarProfile = document.getElementById('navbar-profile');

// Use Locomotive Scroll's scroll event listener
scroll.on('scroll', (args) => {
  if (args.scroll.y > 100) {
    logo.style.opacity = '0';
    navbarProfile.classList.add('visible');
  } else {
    logo.style.opacity = '1';
    navbarProfile.classList.remove('visible');
  }
});