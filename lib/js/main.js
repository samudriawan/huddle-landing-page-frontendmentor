const submitBtn = document.getElementById('submit');
const inputEmail = document.getElementById('email');

window.onload = () => {
	inputEmail.value = '';
};

submitBtn.addEventListener('click', validate);

function validate(e) {
	const errorMsg = document.getElementById('error-msg');
	const errorIcon = document.getElementById('error-icon');

	if (!emailIsValid(inputEmail.value)) {
		errorMsg.style.visibility = 'visible';
		errorIcon.style.visibility = 'visible';
		e.preventDefault();
		inputEmail.focus();
		return false;
	}

	return true;
}
function emailIsValid(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
