// DOM ELEMENTS
const form = document.querySelector('form');
const inputFirstName = document.getElementById('first');
const inputLastName = document.getElementById('last');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
// const inputMessage = document.getElementById('message');



function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
	window.location.reload();
}


// Enlève les bordures des inputs valide
function validInput(input) {
	input.style.border = 'none';
}


// Invalide d'une bordure rouge les inputs du formulaire
function invalidInput(input) {
	input.style.border = '2px solid red';
}

// ---------------------------Modal Form -------------------------------

// Modal firstName Input ---------------------

// Ecoute de l'input du prénom
inputFirstName.addEventListener('input', function () {
	validFirstName(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser certains caractères, avec un minimum de 2 lettres (mets de côté les chiffres)
const validFirstName = function (acceptFirstName) {

	let small = inputFirstName.nextElementSibling;
	let firstNameRegExp = new RegExp(
		'^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]{2,}$',
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

// Ecoute de l'input du nom
inputLastName.addEventListener('input', function () {
	validLastName(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser certains caractères, avec un minimum de 2 lettres (mets de côté les chiffres)
const validLastName = function (acceptLastName) {
	let small = inputLastName.nextElementSibling;
	let lastNameRegExp = new RegExp(
		'^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð-]{2,}$',
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

// Ecoute de l'input de l'adresse email
inputEmail.addEventListener('change', function () {
	validEmail(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser un certain nombre de caractères et l'obligation de symboles (comme toutes les adresses emails)
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

inputMessage.addEventListener('input', function () {
	validMessage(this);
});

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

form.addEventListener('submit', function () {

	// Vérifie que les inputs sont remplis et valide
	if (
		validFirstName(inputFirstName) &&
		validLastName(inputLastName) &&
		validEmail(inputEmail) &&
		validMessage(inputMessage)
	) {
		return true;

	} else {	
		return false;
	}
});

