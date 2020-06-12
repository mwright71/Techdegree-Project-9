// // traffic line chart

// const trafficCanvas = document.getElementById('trafficChart');

// let trafficData = {
//     labels: ["16-22", "23-19", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
//     datasets: [{
//         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
//         backgroundColor: 'rgba(226, 227, 246, 0.6)',
//         borderWidth: 1,
//     }]
// };

// let trafficOptions = {
//     aspectRatio: 2.5,
//     animation: {
//         duration: 0
//     },
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero:true
//             }
//         }]
//     },
//     legend: {
//         display: false
//     }
// };

// let trafficChart = new Chart(trafficCanvas, {
//     type: 'line', 
//     data: trafficData,
//     options: trafficOptions
// });

// // Bar Graph

// const dailyCanvas = document.getElementById('dailyChart');

// const dailyData = {
//     labels:["S", "M", "T", "W", "T", "F", "S"],
//     datasets: [{
//         label: '# of hits',
//         data: [75, 115, 175, 125, 225, 200, 100],
//         backgroundColor: '#7477BF',
//         borderWidth: 1
//     }]
// };

// const dailyOptions = {
//     scales: {
//         yAxes: [{
//             ticks: {
//                 beginAtZero: true
//             }
//         }]
//     },
//     legend: {
//         display: false
//     }
// };

// let dailyChart = new Chart(dailyCanvas, {
//     type: 'bar', 
//     data: dailyData,
//     options: dailyOptions
// });

// // Mobile circle graph
// const mobileCanvas = document.getElementById('mobileChart');
// const mobileData = {
//     labels: ["Desktops", "Tablets", "Phones"],
//     datasets: [{
//         label: '# of Users',
//         data: [ 2000, 550, 500],
//         borderWidth: 0,
//         backgroundColor: [
//             '#7477BF',
//             '#78CF82',
//             '#51B6C8',
//         ]
//     }]
// };

// const mobileOptions = {
//     legend: {
//         position: 'right',
//         labels: {
//             boxwidth: 20,
//             fontStyle: 'bold'
//         }
//     }
// };

// let mobileChart = new Chart(mobileCanvas, {
//     type: 'doughnut',
//     data: mobileData,
//     options: mobileOptions
// });


let tChart = document.getElementById('trafficChart');
let dChart = document.getElementById('dailyChart');
let mChart = document.getElementById('mobileChart');

// Global options =====================>
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.defaultFontSize = 8;
Chart.defaults.global.defaultFontColor = '#8a8a8a';


// Data Sets ==========================>
let monthlyTraffic = [
  1000, 1500,
  1250, 1750,
  2000, 1500,
  1500, 1000,
  1750, 2250];

let weeklyTraffic = [
  345, 245,
  289, 256,
  143, 231,
  546, 132,
  550, 243];

let dailyTraffic = [
  87, 56,
  78, 30,
  86, 43,
  56, 67,
  94, 95];

let hourlyTraffic = [
  12, 25,
  32, 37,
  25, 12,
  19, 14,
  34, 23];



// Traffic LINE Chart ==================>
let trafficChart = new Chart(tChart, {
    type: 'line',
    data: {
        labels: [
          '16-22', '23-29',
          '30-5', '6-12',
          '13-19', '20-26',
          '27-3', '4-10',
          '11-17', '18-24'],
        datasets: [{
            backgroundColor: 'rgba(67, 139, 129, 0.2)',
            lineTension: 0,
            borderColor: '#5dd2d6',
            pointRadius: 4.5,
            pointBackgroundColor: '#fff',
            borderJoinStyle: 'miter',
            borderWidth: 1,
            hoverBorderWidth: 2,
            hoverBorderColor: '#009d9d',
            data: hourlyTraffic,
        }]
    },
            options: {
              legend: {
                display: false
              },
              scales: {
                gridLines: {
                  color: '#fff'
                },
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
                },
            }
});

// Daily Traffic BAR Chart ==================>
let dailyChart = new Chart(dChart, {
    type: 'bar',
    data: {
      labels: [
        'S', 'M',
        'T', 'W',
        'T', 'F',
        'S'],
      datasets: [{
          backgroundColor: '#84dadd',
          lineTension: 0,
          pointRadius: 4.5,
          pointBackgroundColor: '#fff',
          borderJoinStyle: 'miter',
          borderWidth: 0,
          data: [
            50, 75,
            150, 100,
            190, 175,
            75],
      }]
    },
    options: {
      legend: {
        display: false
      }
    }
});

// Mobile DOUGHNUT Chart ==================>
var mobileChart = new Chart(mChart, {
    type: 'doughnut',
    data: {
      labels: [
        'Phones',
        'Tablets',
        'Desktop'],
      datasets: [{
        backgroundColor: [
        '#906cd4',
        '#3bd5b0',
        '#84dadd'],
        data: [
          10,
          10,
          80],
        }]
    },
    options: {
      legend: {
        position: 'right',
        labels : {
          boxWidth: 15,
          fontSize: 15,
        }
      }
    }
});

