const bell = document.getElementsByClassName('bell')[0];
const notifications = document.getElementsByClassName('notifications')[0];
const close = document.getElementsByClassName('close');
const notificationItems = [
    'You have 20 new visits today.<div class="close" id="close"></div>',
    '4 people have added you on facebook.<div class="close" id="close"</div>',
    'SpaceX Launch a success! <a target="_blank" href="https://www.washingtonpost.com/technology/2020/05/30/spacex-nasa-launch-live-updates/">Read more...</a><div class="close" id="close"></div>'
];
const hide = (element) => element.style.display = "none";
const show = (element) => element.style.display = "block";
const pingDot = document.querySelector('.ping-dot');
const animate = (element, animation) => element.style.animation = animation;

const searchResults = document.getElementById('userSearch');
const userSearch = document.querySelector('input[name="userName"]');

const userNames = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
];

// Alert Bar
const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
`
    <p><strong>Alert:</strong> You have unread notifications!</p>
    <p class="alertClose">X</p>

`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.className === 'alertClose') {
        alertBanner.style.display = 'none';
    }
});

// Message box
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');



send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert('Please fill out the user and message fields before sending');
    } else if (user.value === "") {
        alert('Please fill out the user field before sending')
    } else if (message.value === "") {
        alert('Please fill out th emessage field before sending');
    } else {
        alert(`Message successfully sent to ${user.value}`);
    }
});

// Show Notifications
bell.addEventListener('click', () => {
    notifications.style.display = 'block';
});


// add notifications
 const addThing = (element,text) => {
    let thing = document.createElement('LI');
    thing.innerHTML = text;
    element.appendChild(thing);
  }
window.addEventListener ('load', () => {
    for (let i = 0; i < notificationItems.length; i++) {
        addThing(notifications, notificationItems[i]);
    }
    for (let i = 0; i < userNames.length; i++) {
        addThing(searchResults,userNames[i]);
    }
    hide(searchResults);
    
});

// close notifications


notifications.addEventListener('click', (e) => {
    if (e.target.className === 'close') {
      let noti = e.target.parentNode;
      animate(noti, 'disappear .2s forwards');
      setTimeout(() => {
        noti.parentNode.removeChild(noti);
        // if no notifications, hide menu
        if (notifications.childNodes.length < 1) {
          hide(notifications);
          hide(pingDot);
        }
      }, 200);
    }
  
});


//   chart interactivity
const trafficTimeframes = document.getElementsByClassName('timeFrames');
const setChartData = (chart,data) => chart.data.datasets[0].data = data;
document.addEventListener('click', (e) => {
    if (e.target.id === 'hourly') {
      setChartData(trafficChart,hourlyTraffic);
    } else if (e.target.id === 'daily') {
      setChartData(trafficChart,dailyTraffic);
    } else if (e.target.id === 'weekly') {
      setChartData(trafficChart,weeklyTraffic);
    } else if (e.target.id === 'monthly') {
      setChartData(trafficChart,monthlyTraffic);
    }
      trafficChart.update();
  
});


// auto Complete

const searchInput = document.getElementById('userField');
searchInput.addEventListener('input', () => {
    let input = searchInput.value.toUpperCase();
    let results = searchResults.querySelectorAll('li');
  
    if (searchInput.value.length === 0) {
      hide(searchResults);
    } else {
      show(searchResults);
    }
  
    for (let i = 0; i < results.length; i++) {
      let name = results[i].textContent.toUpperCase();
      if (name.indexOf(input) > -1) {
        show(results[i]);
      } else {
        hide(results[i]);
      }
    }
  
});

  // results click
searchResults.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      userSearch.value = e.target.textContent;
    }
  
    hide(searchResults);
  
});


const emailToggle = document.querySelectorAll('#toggle-container input[type="checkbox"]')[0];
const profileToggle = document.querySelectorAll('#toggle-container input[type="checkbox"]')[1];
const timeZone = document.getElementById('timezone');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');
// Event handler for save button
saveButton.addEventListener('click', () =>{
localStorage.setItem('email', emailToggle.checked);
localStorage.setItem('public', profileToggle.checked);
localStorage.setItem('Timezone', timezone.selectedIndex);
});
// clears localStorage for cancel button
cancelButton.addEventListener('click', () =>{
localStorage.clear();
emailToggle.checked = false;
profileToggle.checked = false;
timezone.selectedIndex = 0;
});
emailToggle.checked = JSON.parse(localStorage.getItem('email'));
profileToggle.checked = JSON.parse(localStorage.getItem('public'));
timeZone.selectedIndex = localStorage.getItem('Timezone')
