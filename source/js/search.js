function searchTeam() {
    var input, filter, container, li, a, txtValue;

    input = document.getElementById("sidebar-searchbar");

    filter = input.value.toUpperCase();

    container = document.getElementById("team-list");

    li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function searchStadium() {
      var input, filter, container, li, a, txtValue;

    input = document.getElementById("sidebar-searchbar");

    filter = input.value.toUpperCase();

    container = document.getElementById("stadium-list");

    li = document.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}