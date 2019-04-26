var ctx = document.getElementById('pirmas_doughnut').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Pizza', 'Burgers', 'Potato chips', 'Chicken wings'],
        datasets: [{
            label: 'Likes',
            backgroundColor: [
                "rgb(14, 249, 14)",
                "rgb(15, 191, 15)",
                "rgb(8, 127, 8)",
                "rgb(4, 86, 4)",
                ],
            borderColor: "rgb(5, 58, 1)",
            borderWidth: 1,
            hoverBorderWidth: 3,
            data: [5, 3, 1, 2]
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
        labels: ['Alien', 'Star Wars', 'Terminator', 'Predator', 'Matrix'],
        datasets: [{
            label: 'Likes',
            backgroundColor: [
                "rgb(107, 197, 239)",
                "rgb(71, 148, 183)",
                "rgb(35, 112, 147)",
                "rgb(12, 82, 114)",
                "rgb(1, 49, 112)",
           ],
            borderColor: "rgb(3, 20, 1)",
            borderWidth: 1,
            hoverBorderWidth: 3,
            data: [10, 9, 5, 6, 8,]
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
        labels: ['Skyrim', 'Red-Alert 2', 'Ghost recon: Wildlands', 'Portal 2', 'Alien: Isolation'],
        datasets: [{
            label: 'Likes',
            backgroundColor: ["rgb(255, 237, 38)",
                "rgb(214, 203, 55)",
                "rgb(181, 171, 43)",
                "rgb(155, 146, 35)",
                "rgb(122, 113, 8)",
                ],
            borderColor: "rgb(3, 20, 1)",
            borderWidth: 1,
            hoverBorderWidth: 3,
            data: [259, 200, 63, 30, 20]
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
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'How I like this day',
            backgroundColor: ["rgba(255, 99, 132, 0.2)",
             "rgba(100, 159, 64, 0.2)", 
             "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
               "rgba(54, 162, 235, 0.2)", 
               "rgba(153, 102, 255, 0.2)", 
               "rgba(201, 203, 207, 0.2)"],
            borderColor: [
                "rgb(5, 50, 1)",
                "rgb(5, 50, 1)",
                "rgb(5, 50, 1)",
                "rgb(5, 50, 1)",
                "rgb(5, 50, 1)",
                "rgb(5, 50, 1)",
                "rgb(5, 50, 1)"],
            borderWidth: 2,
            hoverBorderWidth: 3,
            data: [0, 3, 6, 7, 8, 10, 9]
        }]
    },

    // Configuration options go here
    options: {}
});

// Slider
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var options = {
        indicators: false,
        duration: 300,
        interval: 5000
    };
    var instances = M.Slider.init(elems, options);
});