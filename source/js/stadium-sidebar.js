stadiumData.forEach(stadium => {
    const groupList = document.getElementById(`${stadium.country.toLowerCase().replace(/\s+/g, '')}`);

    const stadiumItem = document.createElement("li");
	
	groupList.appendChild(stadiumItem);

    const stadiumLink = document.createElement('a');
    stadiumLink.href = `stadium_guide.html?name=${encodeURIComponent(stadium.name)}`;

    stadiumLink.textContent = `${stadium.name} (${stadium.city})`;

    stadiumItem.appendChild(stadiumLink);

    
})