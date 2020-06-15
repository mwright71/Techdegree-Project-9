const buttons = document.getElementById('projectBtns');
const dashboard = document.getElementById('dashboard');
const wheelGame = document.getElementById('wheel');
const form = document.getElementById('form');
const gallery = document.getElementById('gallery');
const directory = document.getElementById('directory');

function toggleDisplay(button, className) {
    if(event.target.className === className) {
        button.style.display = 'grid';
    }else {
        button.style.display = 'none';
    }
}

buttons.addEventListener('click', e => {
    toggleDisplay(dashboard, 'dashboardBtn');
    toggleDisplay(wheelGame, 'wheelBtn');
    toggleDisplay(form, 'formBtn');
    toggleDisplay(gallery, 'galleryBtn');
    toggleDisplay(directory, 'directoryBtn');
});

$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 2,
})
  

  


 