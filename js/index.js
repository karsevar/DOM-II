// Your code goes here

// === Click and mouseenter and mouseleave events for nav bar
const navBars = document.querySelectorAll('.nav-link');

navBars.forEach(navBar => navBar.addEventListener('mouseenter', event => {
	event.target.style.color = '#17A2B8'
})) 

navBars.forEach(navBar => navBar.addEventListener('mouseleave', event => {
	event.target.style.color = '#212529'
}))

//=== Click event idea for navigation elements:
const bodySelector = document.querySelector('body');
const sorryTab = document.createElement('div');
sorryTab.style.width = '50%';
sorryTab.style.height = '200px';
sorryTab.style.margin = '600px auto 0 auto';
sorryTab.style.position = 'fixed';
sorryTab.style.bottom = '50%';
sorryTab.style.left = '25%';
sorryTab.style.backgroundColor = '#FFFFFF';
sorryTab.style.display = 'none';

const sorryText = document.createElement('h4');
sorryText.textContent = 'Sorry this part of the site has been finished yet. Please come again later!';
sorryText.style.marginLeft = '10px';
sorryTab.appendChild(sorryText);
bodySelector.prepend(sorryTab);

const sorryButton = document.createElement('div');
// sorryButton.className = 'btn';
// Interesting I thought that setting sorryButton with the className btn 
// will give it the same characteristics as the btn buttons on the original 
// html will need to look into this.

// Setting button styles manually:
sorryButton.textContent = 'Back to Page';
sorryButton.style.width = '200px';
sorryButton.style.height = '45px';
sorryButton.style.paddingLeft = '10px';
sorryButton.style.backgroundColor = '#17A2B8';
sorryButton.style.color = 'white';
sorryButton.style.border = '1px solid #C0C0C0';
sorryButton.style.fontSize = '1.8rem';
sorryButton.style.borderRadius = '15px';
sorryButton.style.display = 'flex';
sorryButton.style.justifyContent = 'center';
sorryButton.style.alignItems = 'center';
sorryTab.appendChild(sorryButton);

// Makes the sorryTab box appear on the screen as a block item.
navBars.forEach(navBar => navBar.addEventListener('click', event => {
	event.preventDefault();
	sorryTab.style.display = 'block';
}))

// sets the display argument for the sorryTab to none.
sorryButton.addEventListener('click', event => {
	sorryTab.style.display = 'none';
})

sorryButton.addEventListener('mouseleave', event => {
	event.target.style.backgroundColor = '#17A2B8'; 
	event.target.style.color = 'white';
})

sorryButton.addEventListener('mouseenter', event => {
	event.target.style.background = 'white';
	event.target.style.color = '#17A2B8';
})

//=== Contact form div layer:
const infoTab = document.createElement('div');
infoTab.style.width = '80%';
infoTab.style.height = '500px';
infoTab.style.margin = '800px auto 0 auto';
infoTab.style.position = 'fixed';
infoTab.style.bottom = '10%';
infoTab.style.left = '10%';
infoTab.style.backgroundColor = '#FFFFFF';


// form parent:
const infoForm = document.createElement('form');
infoForm.action = '/action_page.php';
infoForm.style.display = 'flex';
infoForm.style.flexDirection = 'column';

// label first name element:
const infoLabelFirst = document.createElement('label');
infoLabelFirst.textContent = 'First Name';
infoForm.appendChild(infoLabelFirst);

// input first name:
const inputFirst = document.createElement('input');
inputFirst.className = 'first-name';
inputFirst.type = 'text';
inputFirst.name = 'firstname';
inputFirst.placeholder = 'first name';
infoForm.appendChild(inputFirst);

// label last name element:
const infoLabelLast = document.createElement('label');
infoLabelLast.textContent = 'Last Name';
infoForm.appendChild(infoLabelLast);

// input last name:
const inputLast = document.createElement('input');
inputLast.className = 'last-name';
inputLast.type = 'text';
inputLast.name = 'lastname';
inputLast.placeholder = 'last name';
infoForm.appendChild(inputLast);

// label email element:
const infoLabelEmail = document.createElement('label');
infoLabelEmail.textContent = 'Email Address';
infoForm.appendChild(infoLabelEmail);

// input email name:
const inputEmail = document.createElement('input');
inputEmail.className = 'email';
inputEmail.type = 'text';
inputEmail.name = 'emal';
inputEmail.placeholder = 'email address';
infoForm.appendChild(inputEmail);

// input submit form layer:
const inputSubmit = document.createElement('input');
inputSubmit.className = 'form-submit';
inputSubmit.type = 'submit';
inputSubmit.value = 'Sign Up!';
infoForm.appendChild(inputSubmit);

infoTab.prepend(infoForm);

bodySelector.prepend(infoTab);

// form template:

/*
<form action="/action_page.php">
      <label for="">First name:</label>
      <input class="first-name" type="text" name="firstname" value="" placeholder="Jim">
      <label for="">Last name:</label>
      <input type="text" name="lastname" value="" placeholder="Raynor">
      <input class="form-submit" type="submit" value="Start A Project">
</form>
*/



