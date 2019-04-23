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

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  var elem = document.querySelector('.tabs');
     var options = {};
     var instance = M.Tabs.init(elem, options);




// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 54.710067, lng: 25.292306};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}