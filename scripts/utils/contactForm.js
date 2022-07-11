// DOM ELEMENTS
const form = document.querySelector('form');
const modal = document.querySelector('.modal');
const closeButton = document.getElementById('close');
const inputFirstName = document.getElementById('first');
const inputLastName = document.getElementById('last');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
const shadowModal = document.querySelector('.shadow-modal');

// Open modal
function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
	shadowModal.style.display = 'block';
	inputFirstName.focus();
}

// Close modal
function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
	shadowModal.style.display = 'none';
}

// Modal keyboard controls
modal.addEventListener('keydown', (e) => {
	let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
	let isEscapePressed = e.key === 'escape' || e.keyCode == 27;

	if (isEscapePressed) {
		closeModal();
	}

	if (!isTabPressed) {
		return;
	}

	if (document.activeElement === closeButton) {
		inputFirstName.focus();
		e.preventDefault();
	}

})

// Removes borders from valid inputs
function validInput(input) {
	input.style.border = 'none';
}


// Invalidates the inputs of the form with a red border
function invalidInput(input) {
	input.style.border = '2px solid red';
}

// ---------------------------Modal Form -------------------------------

// Modal firstName Input ---------------------

// Listening to the input of the first name
inputFirstName.addEventListener('input', function () {
	validFirstName(this);
});

// Verifies that the input is filled in, and the regex allows to allow certain characters, with a minimum of 2 letters (set aside the numbers)
const validFirstName = function (acceptFirstName) {

	let small = inputFirstName.nextElementSibling;
	let firstNameRegExp = new RegExp(
		'^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ._\s-]{2,}$',
		'u'
	);

	if (firstNameRegExp.test(acceptFirstName.value)) {
		validInput(inputFirstName);
		small.innerHTML = '';
		return true;
	} else {
		invalidInput(inputFirstName);
		small.innerHTML = 'Veuillez renseigner un prénom';
		return false;
	}
};


// Modal lastName Input -----------------------

// Listening to the input of the lastName
inputLastName.addEventListener('input', function () {
	validLastName(this);
	// console.log(inputLastName.value);
});

// Verifies that the input is filled in, and the regex allows to allow certain characters, with a minimum of 2 letters (set aside the numbers)
const validLastName = function (acceptLastName) {
	let small = inputLastName.nextElementSibling;
	let lastNameRegExp = new RegExp(
		'^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ._\s-]{2,}$',
		'u'
	);

	if (lastNameRegExp.test(acceptLastName.value)) {
		validInput(inputLastName);
		small.innerHTML = '';
		return true;
	} else {
		invalidInput(inputLastName);
		small.innerHTML = 'Veuillez renseigner un nom';
		return false;
	}
};


// Modal Email Input -------------------------------

// Listening to the input of the email address
inputEmail.addEventListener('change', function () {
	validEmail(this);
	// console.log(inputEmail.value);
});

// Verifies that the input is filled in, and the regex allows to allow a certain number of characters and the obligation of symbols (like all email addresses)
const validEmail = function (acceptEmail) {
	let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
	let small = inputEmail.nextElementSibling;

	if (emailRegExp.test(acceptEmail.value)) {
		validInput(inputEmail);
		small.style.color = 'green';
		small.innerHTML = 'Adresse email valide';
		return true;
	} else {
		invalidInput(inputEmail);
		small.style.color = 'red';
		small.innerHTML = 'Adresse email non valide';
		return false;
	}
};


// Modal Message Input -------------------------------

// Listening to the input of the message input
inputMessage.addEventListener('input', function () {
	validMessage(this);
});

// Verifies that the input is filled in
const validMessage = function (acceptMessage) {
	let small = inputMessage.nextElementSibling;

	if (acceptMessage.value) {
		validInput(inputMessage);
		small.innerHTML = '';
		return true;
	} else {
		invalidInput(inputMessage);
		small.innerHTML = 'Veuillez renseigner un message';
		return false;
	}
}


// Valid Form --------------------------------------

// for the validation of the form, resets the inputs, retrieves the information indicated in the console and closes the modal
function validForm() {
	let small = document.querySelectorAll('small');
	for (i = 0; i < small.length; i++) {
		small[i].innerHTML = '';
	}
	console.log('Prénom: ' + inputFirstName.value);
	console.log('Nom: ' + inputLastName.value);
	console.log('Email: ' + inputEmail.value);
	console.log('Message: ' + inputMessage.value);
	form.reset();
	closeModal();
}

// error function if not all inputs are filled in
function errorForm() {
	if (!validFirstName(inputFirstName) &&
		!validLastName(inputLastName) &&
		!validEmail(inputEmail) &&
		!validMessage(inputMessage)
	) {
		return;
	}

}

// listening to the form
form.addEventListener('submit', function (e) {
	e.preventDefault();

	// Verifies that inputs are filled in and valid
	if (
		validFirstName(inputFirstName) &&
		validLastName(inputLastName) &&
		validEmail(inputEmail) &&
		validMessage(inputMessage)
	) {
		validForm();
		return true;

	} else {
		errorForm();
		return false;
	}
});