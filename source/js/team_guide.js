document.addEventListener("DOMContentLoaded", () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const selectedTeamName = urlParams.get('name');
    

     // Finds the team in the data
      const selectedTeam = teamData.find(
        team => team.name === selectedTeamName
    );

    document.title = `${selectedTeam.name} - Team guide`;

    const heading = document.getElementById('heading');
    const ifHosts = selectedTeam.are_hosts === 'Yes';
    const ifChampions = selectedTeam.are_champions === 'Yes';

    heading.innerHTML += `
    <h2><span class="${selectedTeam.flag_icon}"></span> ${selectedTeamName} ${ifHosts ? "<span class='host-badge' title='Hosts'>H</span>" : ""} ${ifChampions ? "<span class='champions-badge' title='Defending champions'>C</span>" : ""}</h2> 
    `;

    const detailsSect = document.getElementById('first-section');

    const nicknames = Array.isArray(selectedTeam.nicknames)
    ? selectedTeam.nicknames
    : [selectedTeam.nicknames];

    detailsSect.innerHTML += `
    <div class='col-1'>
        <span id="group-detail-span">Group ${selectedTeam.group}</span>
        <p><b>FIFA Ranking:</b> ${selectedTeam.fifa_ranking}</p>
        <p><b>Association:</b> ${selectedTeam.association}</p>
        <p><b>Confederation:</b> ${selectedTeam.confederation}</p>
        <p><b>${nicknames.length > 1 ? "Nicknames" : "Nickname"}:</b> ${nicknames.join(", ")}</p>
        <p><b>Coach:</b> ${selectedTeam.coach}</p>
    </div>
    <div class='col-2'>
        <img src="${selectedTeam.assc_crest}" alt="${selectedTeam.association}" 
        title="${selectedTeam.association}" height="259">
    </div>`;

    const historySect = document.getElementById('second-section');

    historySect.innerHTML += `
    <h2>World Cup record</h2>
    ${selectedTeam.no_wc_past_appearances >= 1 
   ? `
        <p><b>No. of past appearances:</b> ${selectedTeam.no_wc_past_appearances}</p>
        <p><b>Best performance:</b> ${selectedTeam.wc_best_result}</p>

        <br>
        <br>

        ${
        selectedTeam.played_in_last_wc === "Yes"
            ? `<p><b>Performance in Qatar 2022:</b> ${selectedTeam.last_wc_perf}</p>`
            : `
            <p><b>Previous appearance:</b> ${selectedTeam.last_wc_app}</p>
            <p><b>Performance in that edition:</b> ${selectedTeam.previous_wc_perf}</p>
            `
        }
        `
        : `<p>${selectedTeam.name} will be making their debut this year.</p>`
    }`;
});
