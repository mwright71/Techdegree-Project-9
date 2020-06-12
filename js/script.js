const buttons = document.getElementById('projectBtns');
const dashboard = document.getElementById('dashboard');
const wheelGame = document.getElementById('wheel');
const form = document.getElementById('form');

function openDisplay(button, className) {
    if(event.target.className === className) {
        button.style.display = 'grid';
    }else {
        button.style.display = 'none';
    }
}

buttons.addEventListener('click', e => {
    openDisplay(dashboard, 'dashboardBtn');
    openDisplay(wheelGame, 'wheelBtn');
    openDisplay(form, 'formBtn');
});
