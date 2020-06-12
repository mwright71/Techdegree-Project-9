const buttons = document.getElementById('projectBtns');
const dashboard = document.getElementById('dashboard');
const wheelGame = document.getElementById('wheel');

buttons.addEventListener('click', e => {
    if(e.target.className === 'dashboardBtn') {
        dashboard.style.display = 'grid';
        wheelGame.style.display = 'none';
    } else if(e.target.className === 'wheelBtn') {
        wheelGame.style.display = 'grid';
        dashboard.style.display = 'none';
    }
});