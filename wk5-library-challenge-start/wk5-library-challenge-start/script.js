(function(){
    'use strict';
    var map = L.map('map').setView([38.549420, -122.668550], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([38.549420, -122.668550]).addTo(map);
var circle = L.circle([38.56013, -122.705111], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [38.551091, -122.668888],
    [38.544381, -122.669911],
    [38.549045, -122.665491]
]).addTo(map);
marker.bindPopup("<b>My Second Home</b><br>AKA my sleepaway camp from when I was a kid.").openPopup();
circle.bindPopup("Iconic next door neighbors.");
polygon.bindPopup("Main Camp");
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
    // add your script here
    
}());