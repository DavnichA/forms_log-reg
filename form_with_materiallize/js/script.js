/* Регистраци */

document.querySelector('#signup-submit').onclick = (event) => {
	event.preventDefault(); //остановка перезагрузки страницы при клике на кнопку
	let name = document.querySelector('#signup-name').value;
	let pass = document.querySelector('#signup-pass').value;
	let email = document.querySelector('#signup-email').value;
	let birthday = document.querySelector('#signup-birthday').value;
	let sex = document.querySelectorAll('.sex');

	for (let i = 0; i < sex.length; i++) {
		if (sex[i].checked) {
			sex = sex[i].value;
			break;
		}
	}

	let data = {
		"name" : name,
		"pass" : pass,
		"email" : email,
		"birthday" : birthday,
		"sex" : sex
	}

	ajax('core/signup.php', 'POST', signup, data);

	function signup(result) {
		console.log(result);
		if (result == 2) {
			alert('Заполните все поля');
		}
		else if (result == 1) {
			alert('Ваши данные приняты');
		}
		else {
			alert('Выполните регистрацию позже');
		}
	}
}

/* Вход в акаунт + куки */

document.querySelector('#login-submit').onclick = (event) => {
	event.preventDefault(); //остановка перезагрузки страницы при клике на кнопку
	let pass = document.querySelector('#login-pass').value;
	let email = document.querySelector('#login-email').value;

	let data = {
		"pass" : pass,
		"email" : email
	}

	ajax('core/login.php', 'POST', login, data);

	function login(result) {
		if (result == 2) {
			alert('Заполните все поля');
		}
		else if (result == 0) {
			alert('Пользователь не найден');
		}
		else {
			result = JSON.parse(result);
			let d = new Date();
			d.setTime(d.getTime() + (10 * 60 * 1000));
			let expires = d.toUTCString();
			document.cookie = `email=${result.email}; expires=${expires}; path=/`;
			location.href="cabinet.php";
		}
	}
}


document.addEventListener('DOMContentLoaded', () => {
/* Двта пикер*/
	let elems = document.querySelectorAll('.datepicker');
	let instances = M.Datepicker.init(elems, {
		"format" : "yyyy-dd-mm"
	});

/* модальное окно */
	/* open modal window */
	document.querySelectorAll('.modal-open-login').forEach((element) => {
		element.onclick = openModal;
	});
	document.querySelectorAll('.modal-open-registration').forEach((element) => {
		element.onclick = openModal;
	});
	/* Close modal window */
	document.querySelectorAll('.modal-close').forEach((element) => {
		element.onclick = closeModal;
	});
	/* Click on overlay*/
	document.querySelectorAll('.modal-overlay-all').forEach((element) => {
		element.onclick = closeModalOverlay;
	});

	function openModal(e) {
		e.preventDefault();
		let modalId = this.dataset.modal;
		if (modalId == "modal-1") {
			var modalElem = document.querySelector('.modal-login[data-modal="' + modalId +'"]');
		}
		else if (modalId == "modal-2") {
			var modalElem = document.querySelector('.modal-registration[data-modal="' + modalId +'"]');
		}
		modalElem.classList.add('active');
		overlay.classList.add('active');

		/*close modal from ESC*/
		document.onkeydown = (event) => {
			if (event.keyCode == 27) {
				modalElem.classList.remove('active');
				overlay.classList.remove('active');
			}
		}
	}

	function closeModal() {
		let modalId = this.dataset.modal;

		if (modalId == "modal-1") {
			var modalElem = document.querySelector('.modal-login[data-modal="' + modalId +'"]');

		}
		else if (modalId == "modal-2") {
			var modalElem = document.querySelector('.modal-registration[data-modal="' + modalId +'"]');
		}
		modalElem.classList.remove('active');

		overlay.classList.remove('active');
	}

	function closeModalOverlay() {
		let modalId = this.dataset.modal;
		let modalElem = document.querySelector('.modal-login[data-modal="' + modalId +'"]');
		let modalElemRegId = "modal-2";
		let modalElemReg = document.querySelector('.modal-registration[data-modal="' + modalElemRegId +'"]');
		modalElemReg.classList.remove('active');
		modalElem.classList.remove('active');
		overlay.classList.remove('active');
	}

	document.querySelector('.form-slider-click').onclick = () => {
	document.querySelector('.form-slider').style.marginLeft = '-30vw';
	}

	document.querySelector('.form-slider-back').onclick = () => {
	document.querySelector('.form-slider').style.marginLeft = '0';
	}
});

