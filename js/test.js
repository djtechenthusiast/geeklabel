 
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
 

$('#clientlist').carousel();
 
var map = null; 
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(51.524152, -0.0738724));
});

function init() { 
    var mapOptions = { 
        zoom: 18,
 
        center: new google.maps.LatLng(40.6700, -73.9400),  
 
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        zoomControl: true,
        scaleControl: true,
 
        styles: [{
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "on"
            }]
        }]
    };
 
    var mapElement = document.getElementById('map');
 
    map = new google.maps.Map(mapElement, mapOptions);
 
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        title: "Geek Label \n 4th Floor \n 27 - 33 Bethnal Green Road \n Shoreditch \n London \n E1 6LA"
    });
}
