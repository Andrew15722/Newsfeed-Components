// // Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
// 	constructor(domElement) {
// 		// assign this.domElement to the passed in domElement
// 		this.domElement = domElement;
// 		// create a reference to the ".expandButton" class.
// 		this.expandButton = this.domElement.querySelector('.expandButton');
// 		// Using your expandButton reference, update the text on your expandButton to say "expand"
// 		this.expandButton.innerText = 'expand';
// 		// Set a click handler on the expandButton reference, calling the expandArticle method.
// 		this.expandButton.addEventListener('click', () => {
// 			this.expandArticle();
// 		});
// 	}

// 	expandArticle() {
// 		// Using our reference to the domElement, toggle a class to expand or hide the article.
// 		this.domElement.classList.toggle('article-open');
// 	}
// }

// /* START HERE:
// - Select all classes named ".article" and assign that value to the articles variable.
// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
// */

// let articles = document.querySelectorAll('.article');
// articles.forEach((article) => new Article(article));

const articleData = [
	{
		title: 'Lambda School Students: "We\'re the best!"',
		date: 'Nov 5th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	},
	{
		title: 'Javascript and You, ES6',
		date: 'Nov 7th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	},
	{
		title: 'React vs Angular vs Vue',
		date: 'Nov 8th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	},
	{
		title: 'Professional Software Development in 2018',
		date: 'Nov 8th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	},
	{
		title: "I Can't Believe This",
		date: 'Nov 8th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	},
	{
		title: "You're Gonna Want To Read This",
		date: 'Nov 9th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	},
	{
		title: 'Read Me Please',
		date: 'Nov 10th, 2017',
		content:
			"Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando" +
			'moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker' +
			'watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. ' +
			'Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn' +
			"jar twi'lek jinn leia jango skywalker mon."
	}
];

const articles = document.querySelector('.articles');

articles.appendChild(createArticle('i did it', 'Jul 22nd, 2018', 'im done'));

articleData.forEach((data) => {
	console.log('creating panel:', data.title);
	articles.appendChild(createArticle(data.title, data.date, data.content));
});

function createArticle(title, date, content) {
	/// Defining the elements
	const article = document.createElement('div');
	const articleTitle = document.createElement('h2');
	const articleDate = document.createElement('p');
	const articleContent = document.createElement('p');
	const button = document.createElement('span');

	// creating the structure of the elements
	article.appendChild(articleTitle);
	article.appendChild(articleDate);
	article.appendChild(articleContent);
	article.appendChild(button);

	// setting class names
	article.classList.add('article');
	articleDate.classList.add('date');
	button.classList.add('expandButton');

	// set text content
	button.textContent = 'Expand';
	articleContent.textContent = content;
	articleDate.textContent = date;
	articleTitle.textContent = title;

	// button events
	button.addEventListener('click', (event) => {
		article.classList.toggle('article-open');
	});

	return article;
}
