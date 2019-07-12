// const toggleMenu = () => {
// 	menu.classList.toggle('menu--open');
// };

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', toggleMenu);

// function refactor

const linkData = [
	{
		name: 'Students'
	},
	{
		name: 'Faculty'
	},
	{
		name: "What's New"
	},
	{
		name: 'Tech Trends'
	},
	{
		name: 'Music'
	},
	{
		name: 'Log Out'
	}
];

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

linkData.forEach((data) => {
	menu.appendChild(createMenu(data.name));
});

menu.appendChild(createMenu('My Test Link'));

function createMenu(linkName) {
	// define the elements

	const linkContainer = document.createElement('ul');
	const link = document.createElement('li');

	// creating the structure of the elements
	menu.appendChild(linkContainer);
	linkContainer.appendChild(link);

	//setting the class names
	// there are none.

	// setting the text content
	link.textContent = linkName;

	//button events
	menuButton.addEventListener('click', (event) => {
		menu.classList.toggle('menu--open');
	});

	return linkContainer;
}
