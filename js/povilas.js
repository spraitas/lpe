var ctx = document.getElementById('pirmas_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen1',
            backgroundColor: ["rgb(5, 1 , 1)",
            "rgb(5, 10, 1)",
            "rgb(5, 40, 1)",
            "rgb(5, 80, 1)",
            "rgb(5, 130, 1)",
            "rgb(5, 180, 1)",
            "rgb(5, 240, 1)",],
            borderColor: "rgb(5, 58, 1)",
            borderWidth: 2,
            data: [1, 1, 1, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 70,
    }
});

var ctx = document.getElementById('antras_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen2',
            backgroundColor: ["rgba(255, 99, 132)",
            "rgb(3, 90, 250)",
            "rgb(3, 80, 200)",
            "rgb(3, 80, 150)",
            "rgb(3, 100, 100)",
            "rgb(3, 110, 80)",
            "rgb(3, 120, 50)",],
            borderColor: "rgb(3, 20, 1)",
            borderWidth: 2,
            data: [1, 1, 1, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 70,
    }
});

var ctx = document.getElementById('trecias_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen2',
            backgroundColor: ["rgba(255, 99, 132)",
            "rgb(3, 90, 250)",
            "rgb(3, 80, 200)",
            "rgb(3, 80, 150)",
            "rgb(3, 100, 100)",
            "rgb(3, 110, 80)",
            "rgb(3, 120, 50)",],
            borderColor: "rgb(3, 20, 1)",
            borderWidth: 2,
            data: [1, 1, 1, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 70,
    }
});

var ctx = document.getElementById('ketvirtas_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen2',
            backgroundColor: ["rgba(255, 99, 132)",
            "rgb(3, 90, 250)",
            "rgb(3, 80, 200)",
            "rgb(3, 80, 150)",
            "rgb(3, 100, 100)",
            "rgb(3, 110, 80)",
            "rgb(3, 120, 50)",],
            borderColor: "rgb(3, 20, 1)",
            borderWidth: 2,
            data: [1, 1, 1, 1, 1, 1, 1]
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 70,
    }
});

var ctx = document.getElementById('antras_bar').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'],
        datasets: [{
            label: 'Sci-Fi movies seen3',
            backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
            borderColor: ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
            borderWidth: 1,
            data: [1, 10, 5, 12, 20, 13, 15]
        }]
    },

    // Configuration options go here
    options: {}
});

// Slider
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var options = {
        indicators: false,
        duration: 400,
        interval: 5000
    };
    var instances = M.Slider.init(elems, options);
  });