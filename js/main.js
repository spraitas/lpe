// Karuselei
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options ={
    	duration: 100,
    	dist: 0,
    	shift: 0,
    	padding: 50,
    	numVisible: 3,

    };
    var instances = M.Carousel.init(elems, options);
  });

  // Paralax efektui
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

// About tabs'u efektui
  var elem = document.querySelector('.tabs');
     var options = {};
     var instance = M.Tabs.init(elem, options);

// About zemelapiui
function initMap() {
  // The location of Uluru
  var uluru = {lat: 54.710067, lng: 25.292306};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

// About us Drop down'ui
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {
    hover: true,
    coverTrigger: false
  };
  var instances = M.Dropdown.init(elems, options);
});

// Modalams
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  console.log(M.Modal);
  var instances = M.Modal.init(elems);
});