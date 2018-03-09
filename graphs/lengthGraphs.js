
//This is the first chart 

//setting this makes sure that the chart absorbs the right data.
datafocus = 1;

//This function counts all the infor for the data below.
count()

var ctx = document.getElementById('lengthOne').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["0-1000 ft.", "1001-2000 ft.", "2001-3000 ft.", "3001-4000 ft.", "4001-5000 ft.", "5001-6000 ft.", "6001-7000 ft.","7001-8000 ft."],
        datasets: [{
            label: "My First dataset",
            data: [pieData[0],pieData[1],pieData[2], pieData[3], pieData[4], pieData[5], pieData[6],pieData[7]],
            backgroundColor: [
                '#4D4D4D',
                 '#F17CB0',
                 '#60BD68',
                '#FAA43A',
               '#581845',
                 '#B276B2',
               '#DECF3F',
                 '#99CC88'
              ],
              borderColor: '#140A1E'
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,

        legend: {
            
            labels: {

                fontColor: 'white'

            }
        }
    }
});

woodVsSteel();

// This is the second Chart
var ctx = document.getElementById('lengthTwo').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Wood", "Steel"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                '#B2912F',
               '#4D4D4D',
              ],
    
            data: [pieData[0],pieData[1]],
            borderColor: '#140A1E',
        }]
        
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
            
            labels: {

                fontColor: 'white'

            }
        }
    }
});

topContinent();

//This is the third chart 

var ctx = document.getElementById('lengthThree').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["australia", "north america", "south america", "europe", "asia", "africa", "antartica"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                 '#4D4D4D',
               '#F17CB0',
                '#60BD68',
                '#FAA43A',
                 '#581845',
                '#DECF3F',
                 '#99CC88'
              ],
            borderColor: '#140A1E',
  
            data: [pieData[0], pieData[1], pieData[2], pieData[3], pieData[4], pieData[5], pieData[6]],
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
  
        legend: {
            
            labels: {

                fontColor: 'white'

            }
        }
    }
});

//This function counts all the infor for the data below.
count()

var ctx = document.getElementById('lengthFour').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["0-1000 ft.", "1001-2000 ft.", "2001-3000 ft.", "3001-4000 ft.", "4001-5000 ft.", "5001-6000 ft.", "6001-7000 ft.","7001-8000 ft."],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                '#4D4D4D',
                 '#F17CB0',
               '#60BD68',
                 '#FAA43A',
                 '#581845',
                '#DECF3F',
                '#99CC88',
                '#B2912F'
              ],
            borderColor: '#140A1E',

            data: [pieData[0],pieData[1],pieData[2], pieData[3], pieData[4], pieData[5], pieData[6],pieData[7]]
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
    
        legend: {
            
            labels: {

                fontColor: 'white'

            }
        }
    }
});
