document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedStadiumName = urlParams.get('name');
    

     // Finds the stadium in the data
      const selectedStadium = stadiumData.find(
        stadium => stadium.name === selectedStadiumName
    );

	document.title = `${selectedStadium.name} - Stadium guide`;
	 
	const heading = document.getElementById("stadium-heading");
	 
	heading.style.backgroundImage = `url('${selectedStadium.image_url}')`
	 
	heading.innerHTML += `
	 <div class="mask">
	 <h2>${selectedStadium.name}</h2>
	 <span>${selectedStadium.city}</span>
	 </div>`;
	 
	const detailsSect = document.getElementById('details-section');
	
	const countryspanStyle = (selectedStadium.country === "United States") ? "us"
						: (selectedStadium.country === "Canada") ? "can"
						: "mex";
	 
					
	const ifAccurateLocation = selectedStadium.accurate_location;
	
	detailsSect.innerHTML += `
	<div id="col-1" class="col">
		<span id="country-detail-span" class="${countryspanStyle}">${selectedStadium.country} <span class="${selectedStadium.flag_icon}"></span></span>
		<p><b>Alternative name:</b> ${selectedStadium.alternative_name}</p>
		${ifAccurateLocation ? `<p><b>Accurate location:</b> ${selectedStadium.accurate_location}</p>` : ""}
		<p><b>Capacity:</b> ${selectedStadium.capacity.toLocaleString('en-US')}</p>
	</div>
	<div id="col-2" class="col">
		<div id="stadium-map">
		</div>
	</div>`;
	
	var map = L.map('stadium-map').setView([selectedStadium.latitude, selectedStadium.longitude], 15);

    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`
    }).addTo(map);

    var marker = L.marker([selectedStadium.latitude, selectedStadium.longitude]).addTo(map);

    var popupContent = `
    <strong>${selectedStadium.name}</strong>`;

    marker.bindPopup(popupContent);
})