var ctx = document.getElementById('pirmas_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen',
            backgroundColor: ["rgba(255, 255, 255)",
            "rgba(232, 111, 64, 0.2)",
            "rgba(111, 205, 86)",
            "rgba(111, 192, 192, 0.2)",
            "rgba(111, 162, 235)",
            "rgba(111, 102, 255, 0.2)",
            "rgba(111, 203, 207)"],
            borderColor: "rgb(5, 58, 1)",
            borderWidth: 1,
            data: [1, 1, 1, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('antras_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen',
            backgroundColor: ["rgba(255, 99, 132)",
            "rgba(232, 111, 64, 0.2)",
            "rgba(111, 205, 86)",
            "rgba(111, 192, 192, 0.2)",
            "rgba(111, 162, 235)",
            "rgba(111, 102, 255, 0.2)",
            "rgba(111, 203, 207)"],
            borderColor: "rgb(214, 214, 214)",
            borderWidth: 1,
            data: [1, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('antras_bar').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen',
            backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
            borderColor: ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
            borderWidth: 1,
            data: [1, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('trecias_line').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [{
            label: 'Sci-Fi movies seen',
            backgroundColor: "rgba(255, 99, 132, 0)",
          
            borderColor: "rgb(214, 214, 214)",
            borderWidth: 1,
            data: [99, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});