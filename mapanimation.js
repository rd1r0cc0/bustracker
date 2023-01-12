//
// Real-Time Bus Tracker for Route Between MIT and Harvard //
//
var map;
var markers = [];

// Load map
function init(){
  var myOptions = {
		zoom      : 14,
		center    : {lat:42.353350,lng:-71.091525},
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var element = document.getElementById('map');

  map = new google.maps.Map(element, myOptions);

  addMarkers();
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';	
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

// Add bus markers to map
async function addMarkers(){
	// get bus data
	const locations = await getBusLocations();

	// loop through data, add bus markers
	locations.forEach(function(bus){
		var marker = getMarker(bus.id);		
		if (marker){
			moveMarker(marker,bus);
		}
		else{
			addMarker(bus);			
		}
	});

	// timer
	console.log(new Date());
	setTimeout(addMarkers,15000);
}

function getMarker(id){
	var marker = markers.find(function(item){
		return item.id === id;
	});
	return marker;
}

function moveMarker(marker,bus) {
	// change icon if bus has changed direction
	var icon = getIcon(bus);
	marker.setIcon(icon);

	// move icon to new lat/lng
  marker.setPosition({
    lat: bus.attributes.latitude, 
    lng: bus.attributes.longitude
  });
}

function getIcon(bus){
	// select icon based on bus direction
	if (bus.attributes.direction_id === 0) {
		return './images/red.png';
	}
	return './images/blue.png';	
}

function addMarker(bus){
	var icon = getIcon(bus);
	var marker = new google.maps.Marker({
	    position: {
	    	lat: bus.attributes.latitude, 
	    	lng: bus.attributes.longitude
	    },
	    map: map,
	    icon: icon,
	    id: bus.id
	});

	markers.push(marker);
}

// start real-time bus tracking
window.onload = init();