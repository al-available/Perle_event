import './css/about.css'


// navigation bar 
import { navBar } from './navBar'
navBar()


const counters = document.querySelectorAll('[data-target]');
const speed = 200;

const animate = (counter) => {
  const target = +counter.getAttribute('data-target');
  const update = () => {
    const current = +counter.innerText;
    const increment = target / speed;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => animate(counter));
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.editorial'));