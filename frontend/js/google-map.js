// google map api
//AIzaSyDHHUnlsnx3cOKdUiz3cmH8z0V2VLOD-oA
//
jQuery(function ($) {
  var markersInstance = {};
  // create infowindow
  var infoWindow = null;

  function initMap(mapConfig) {

    // Specify features and elements to define styles.

    var isDraggable = jQuery(document).width() > 768 ? true : false; // If document (your website) is wider than 768px, isDraggable = true, else isDraggable = false

    var styledMapType = new google.maps.StyledMapType([
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [
              {
                "color": "#ba5858"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [
              {
                "color": "#e57878"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#fcfcfc"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#fcfcfc"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.attraction",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#dddddd"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#dddddd"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ba5858"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ba5858"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [
              {
                "hue": "#ff0036"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "simplified"
              },
              {
                "color": "#dddddd"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ba5858"
              }
            ]
          }
        ],
        {name: 'Styled Map'});

    var mapOptions = {
      draggable: isDraggable,
      center: {
        lat: mapConfig.mapCenter[0],
        lng: mapConfig.mapCenter[1]
      },
      // Apply the map style array to the map.
      zoom: mapConfig.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      panControl: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: true,
      overviewMapControl: false,
      scrollwheel: false,// Prevent users to start zooming the map when scrolling down the page
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
          'styled_map']
      }
      //... options options options
    };
    // Create a map object and specify the DOM element for display.
    gMap = new google.maps.Map(document.getElementById('g-map'), mapOptions);
    gMap.mapTypes.set('styled_map', styledMapType);
    gMap.setMapTypeId('styled_map');

    // create markers
    var markers = mapConfig.markers;
    var markerPosition = {};

    for (var marker in markers) {

      // // create new marker position instance
      markerPosition[marker] = new google.maps.LatLng(markers[marker].center[0], markers[marker].center[1]);
      // create new marker instance
      markersInstance[marker] = new google.maps.Marker({
        position: markerPosition[marker],
        map: gMap,
        title: markers[marker].title
      });
    }


  }// initMap

  function centeringMarker(latitude, longitude) {
    //centering map
    // because gladiolus
    //gMap.setCenter({lat: latitude, lng: longitude});
    gMap.panTo({lat: latitude, lng: longitude});
    //return false;
  }

  $(window).on("load", function () {
    if (typeof mapConfig != "undefined") {
      var gMap;
      initMap(mapConfig);
    }
  });

}); // ready
// google map api end
