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