// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');

const linksContainer = document.querySelector('.links-container');

const links = document.querySelector('.links');

/* 
navToggle.addEventListener('click', function(){
  linksContainer.classList.toggle('show-links');

This approach is useful in some cases, but there is some drawbacks when you want to add a new link to the bar or delete ane. The best setup for this is to calculate de height dynamically Using Element.getBoundingClientRect() method. 
})*/

//Using Element.getBoundingClientRect() method
navToggle.addEventListener('click', function () {
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;

	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
	}
	//when links already opened
	else {
		linksContainer.style.height = 0;
	}
});

const navbar = document.getElementById('nav');

const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************

window.addEventListener('scroll', function () {
	//console.log(window.pageYOffset);
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;

	if (scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}

	if (scrollHeight > 500) {
		topLink.classList.add('show-link');
	} else {
		topLink.classList.remove('show-link');
	}
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
//console.log(scrollLinks);

scrollLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		//prevent default
		e.preventDefault();
		// navigate to specific spot
		const id = e.currentTarget.getAttribute('href').slice(1);
		//console.log(id);
		const element = document.getElementById(id);

		//calculate the heights
		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = navbar.classList.contains('fixed-nav')
		let position = element.offsetTop - navHeight;

//VIDEO: 04:32:45
		//console.log(position);
		window.scrollTo({
			left: 0, //scroll vertically only
			top: position,
		});
		//to close the links on an smaller screen
    linksContainer.style.height = 0;
	});
});

