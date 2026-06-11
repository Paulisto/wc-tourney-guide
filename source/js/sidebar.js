teamData.forEach(team => {
    const groupList = document.getElementById(`group-${team.group.toLowerCase()}`);

    const teamItem = document.createElement("li");

    const teamLink = document.createElement('a');
    teamLink.href = `team_guide.html?name=${encodeURIComponent(team.name)}`;

    teamLink.innerHTML += `
    <span class="${team.flag_icon}"></span> ${team.name}`;

    teamItem.appendChild(teamLink);

    groupList.appendChild(teamItem);

    if (teamLink.href === window.location.href) {
		teamLink.classList.add("current-team")
	}
})