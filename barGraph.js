mostCoasters();

var ctx = document.getElementById("barGraph").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["australia","north america","south america","europe","asia","africa","antartica"],
        datasets: [{
            label: '# of Votes',
            data: [pieData[0],pieData[1],pieData[2],pieData[3],pieData[4],pieData[5],pieData[6]],
            backgroundColor: [
                '#1f77b4',
                '#ff7f0e',
                '#2ca02c',
                '#17becf',
                 '#7f7f7f',
                 '#FAA43A',
               '#581845'
              ],
            borderColor: '#140A1E',
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            labels: {

                fontColor: 'white'

            }
        },
        scales: {       
            yAxes: [{
                ticks: {
                    fontColor:'#FFC62F',
                    beginAtZero:true
                },
                gridLines: {
                    color:'#140A1E'


                }
              
            }],
            xAxes:[{
                gridLines: {
                    display:false,
                    color:'#140A1E'

                },
                ticks:{
                    fontColor:'#FFC62F',
                    autoSkip: false
                },          
            }]
        }
    }
});
