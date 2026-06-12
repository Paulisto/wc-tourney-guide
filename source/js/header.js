const navLinks = [
    {name: 'Home', link: 'index.html'},
	{name: 'Team Guides', link: 'team_guide.html?name=Mexico'},
	{name: 'Stadium Guides', link: 'stadium_guide.html?name=BC%20Place'}
];

const header = document.getElementById("header");

const navbar = document.createElement("navbar");
navbar.classList.add('navbar');

const logoContainer = document.createElement("div");

navbar.appendChild(logoContainer);

const logo = document.createElement("img");
logo.src = "source/images/logo.png";
logo.id = "website-logo";
logo.alt= "Logo";

const logoLink = document.createElement('a');
logoLink.className = 'navbar-brand';
logoLink.href = 'index.html';


logoLink.appendChild(logo);
logoContainer.appendChild(logoLink)

const nav = document.createElement("nav"); 
const navList = document.createElement("ul");

nav.appendChild(navList);

navLinks.forEach(navLink => {
	
	
	const navItem = document.createElement("li");
	navItem.classList.add = "nav-link";
	
	navList.appendChild(navItem);
	
	const a = document.createElement("a");
	a.href = navLink.link;
	a.textContent = navLink.name;
	navItem.appendChild(a);

	
	navList.appendChild(navItem);
	
})

navbar.appendChild(nav);
header.appendChild(navbar);