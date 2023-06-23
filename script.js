const $Main = document.querySelector('.wrapper');
const $ThanksDiv = document.querySelector('.thanks');
const $ButtonSubmit = document.querySelector('.submit');
const $InputEmail = document.querySelector('.inputEmail');
const $Error = document.querySelector('.error');

$ButtonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	const emailValue = $InputEmail.value;
	if (!emailValue.match(pattern)) {
		$Error.classList.remove('invisible');
		$InputEmail.classList.add('inputEmailError');
	} else {
		$Main.classList.add('invisible');
		$ThanksDiv.classList.remove('invisible');
	}
});
