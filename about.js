console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted succesfully");
	console.log('form submit');
}

function alertUser() {
	alert("Give the user a compliment");
}

let form = document.querySelector('#contact');
let duckImage = document.querySelector('#duck-image');


form.addEventListener('submit', handleSubmit);
duckImage.addEventListener('mouseover', alertUser)