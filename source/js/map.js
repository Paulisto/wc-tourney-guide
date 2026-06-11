var map = L.map('map').setView([50.18, -109.69], 3);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
        attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`
    }).addTo(map);
	
var circles = [];

for (var i = 0; i < stadiumData.length; i++) {
    addMarker(stadiumData[i]);
};

function addMarker(stadium) {
	var circle = L.marker([stadium.latitude, stadium.longitude]).addTo(map);
	
	var stadiumImage = stadium.image_url;
	
	 var popupContent = `
		<img src="${stadiumImage}" width="250" height="144">
		<a style="text-decoration: none;" href="stadium_page.html?name=${encodeURIComponent(stadium.name)}"><h4>${stadium.name}</h4></a>
		(${stadium.alternative_name})
	`;
	
	circle.bindPopup(popupContent);
	
	circle.stadiumData = stadium;
	
	circles.push(circle);
}