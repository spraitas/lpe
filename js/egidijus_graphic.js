
            // Load google charts
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            // Draw the chart and set the chart values
            function drawChart() {
              var data = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day'],
              ['Darbas', 0],
              ['Cooking', 2],
              ['Learning a Foreign Language', 4],
              ['Sport', 2],
              ['Sleep', 4],
              ['Coding', 7],
              ['Bimbinejimas', 0],
             
             
            ]);

              // Optional; add a title and set the width and height of the chart
              var options = {
                backgroundColor: 'transparent',
                'title':'My day activities', 'width':'100%', 'height':400};

              // Display the chart inside the <div> element with id="piechart"
              var chart = new google.visualization.PieChart(document.getElementById('piechart'));
              chart.draw(data, options);
            }

var ctx = document.getElementById('myChart01').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Time for cultural events',
            backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
            borderColor: ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
            borderWidth: 1,
            data: [1, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart02').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [{
            label: 'Daily Rate',
            backgroundColor: "rgba(255, 99, 132, 0)",
          
            borderColor: "rgb(214, 214, 214)",
            borderWidth: 1,
            data: [99, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('myChart03').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Isgerto alaus kiekis',
            backgroundColor: ["rgba(255, 99, 132)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207)"],
            borderColor: "rgb(214, 214, 214)",
            borderWidth: 1,
            data: [1, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('myChart04').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Isgerto alaus kiekis',
            backgroundColor: ["rgba(255, 99, 132)",
            "rgba(255, 159, 64)",
            "rgba(255, 205, 86)",
            "rgba(255, 192, 192)",
            "rgba(254, 162, 235)",
            "rgba(153, 102, 255)",
            "rgba(201, 203, 207)"],
            borderColor: "rgb(214, 214, 214)",
            borderWidth: 1,
            data: [45, 10, 55, 12, 20, 53, 15]
        }]
    },

    // Configuration options go here
    options: {}
});





            