const clickableDiv = document.querySelector('.clickable');
const targetDiv = document.querySelector('.target');

clickableDiv.addEventListener('click', () => {
  targetDiv.classList.add('hover-effect');
});

clickableDiv.addEventListener('mouseleave', () => {
  targetDiv.classList.remove('hover-effect');
});