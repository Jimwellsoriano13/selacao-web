const projectContainer = $('.project-gallery').isotope({
  itemSelector: '.project-item',
  layoutMode: 'fitRows'
});

const buttons = document.querySelectorAll('.button-group .project-button');

buttons.forEach(button =>{
button.addEventListener('click', function(){

  buttons.forEach(btn => btn.classList.remove('active'));
  this.classList.add('active');

  const value = this.getAttribute('data-filter');

  projectContainer.isotope({
    filter: value
  })
});
});

