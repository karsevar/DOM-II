// Your code goes here

// === Click and mouseenter and mouseleave events for nav bar
const navBars = document.querySelectorAll('.nav-link');

navBars.forEach(navBar => navBar.addEventListener('mouseenter', event => {
	event.target.style.color = '#17A2B8'
})) 

navBars.forEach(navBar => navBar.addEventListener('mouseleave', event => {
	event.target.style.color = '#212529'
}))

// Click event idea for navigation elements:
const bodySelector = document.querySelector('body');

navBars.forEach(navBar => navBar.addEventListener('click', event => {

}))

