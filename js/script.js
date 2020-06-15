const buttons = document.getElementById('projectBtns');
const dashboard = document.getElementById('dashboard');
const wheelGame = document.getElementById('wheel');
const form = document.getElementById('form');
const gallery = document.getElementById('gallery');

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
});
