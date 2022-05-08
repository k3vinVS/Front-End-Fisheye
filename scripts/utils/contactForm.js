// DOM ELEMENTS
const form = document.querySelector('form');
const inputFirstName = document.querySelector('#first');
const inputLastName = document.querySelector('#last');
const inputEmail = document.querySelector('#email');


function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


// Ecoute de l'input du prénom
inputFirstName.addEventListener('input', function() {
	validFirstName(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser certains caractères, avec un minimum de 2 lettres (mets de côté les chiffres)
const validFirstName = function(acceptFirstName) {
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


// Ecoute de l'input du nom
inputLastName.addEventListener('input', function() {
	validLastName(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser certains caractères, avec un minimum de 2 lettres (mets de côté les chiffres)
const validLastName = function(acceptLastName) {
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


// Ecoute de l'input de l'adresse email
inputEmail.addEventListener('change', function() {
	validEmail(this);
});

// Vérifie que l'input est renseigné, et le regex permet d'autoriser un certain nombre de caractères et l'obligation de symboles (comme toutes les adresses emails)
const validEmail = function(acceptEmail) {
	let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
	let small = inputEmail.nextElementSibling;

	if (emailRegExp.test(acceptEmail.value)) {
		// validInput(inputEmail);
		small.style.color = 'green';
        alert('vrai');
		// small.innerHTML = 'Adresse email valide';
		return true;
	} else {
		// invalidInput(inputEmail);
		small.style.color = 'red';
        alert('faux');
		// small.innerHTML = 'Adresse email non valide';
		return false;
	}
};