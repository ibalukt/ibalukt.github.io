
//This is the first chart 

//setting this makes sure that the chart absorbs the right data.
datafocus = 2;

count();

var ctx = document.getElementById('heightOne').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["0-90 ft.", "91-180 ft.","181-270 ft.", "271-360 ft.", "361-450 ft."],
        datasets: [{
            label: "My First dataset",
            data: [pieData[0],pieData[1],pieData[2], pieData[3], pieData[4]],
            backgroundColor: [
                '#4D4D4D',
                '#F17CB0',
                 '#60BD68',
                '#FAA43A',
                '#581845'
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
var ctx = document.getElementById('heightTwo').getContext('2d');
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
        borderColor: '#140A1E',
  
            data: [pieData[0],pieData[1]],
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

topContinent();

//This is the third chart 

var ctx = document.getElementById('heightThree').getContext('2d');
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
                 '#B276B2',
                '#DECF3F',
         
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

count();

var ctx = document.getElementById('heightFour').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["0-90 ft.", "91-180 ft.","181-270 ft.", "271-360 ft.", "361-450 ft."],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                '#4D4D4D',
                 '#F17CB0',
                '#60BD68',
                '#FAA43A',
                '#581845'
              ],
            borderColor: '#140A1E',
  
            data: [pieData[0],pieData[1],pieData[2], pieData[3], pieData[4]]
        }]
    },

    // Configuration options go here
    options: {
        maintainAspectRatio: false,
        legend: {
            labels: {

                fontColor: 'white'

            },
        }
    }
});
