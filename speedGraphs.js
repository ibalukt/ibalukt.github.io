
//This is the first chart 

//setting this makes sure that the chart absorbs the right data.
datafocus = 3;

//This function counts all the infor for the data below.
count()

var ctx = document.getElementById('speedOne').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["0-20 mph.", "21-40 mph.", "41-60 mph.", "61-80 mph.", "81-100 mph.", "101-120 mph.", "121-140 mph."],
        datasets: [{
            label: "My First dataset",
            data: [pieData[0], pieData[1], pieData[2], pieData[3], pieData[4], pieData[5], pieData[6]],
            backgroundColor: [
                '#4D4D4D',
                 '#F17CB0',
               '#60BD68',
                 '#FAA43A',
                '#581845',
                '#B276B2',
                 '#DECF3F'
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
var ctx = document.getElementById('speedTwo').getContext('2d');
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
                '#4D4D4D'
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

var ctx = document.getElementById('speedThree').getContext('2d');
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
                 '#DECF3F'
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

var ctx = document.getElementById('speedFour').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["0-20 mph.", "21-40 mph.", "41-60 mph.", "61-80 mph.", "81-100 mph.", "101-120 mph.", "121-140 mph."],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                 '#4D4D4D',
                 '#F17CB0',
                 '#60BD68',
                '#FAA43A',
                 '#581845',
                 '#B276B2',
                 '#DECF3F'
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