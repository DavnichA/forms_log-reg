/* извлечение значение куки в данном случае имейл */

function getCookie(email) {
	let name = email + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(i);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return ''; 
}

let userEmail = getCookie('email');

ajax('core/get_user_data.php', 'POST', getUserData, {'email' : userEmail});

function getUserData(result) {
	result = JSON.parse(result);
	document.querySelector('#signup-name').value = result.name;
	document.querySelector('#signup-pass').value = result.password;
	document.querySelector('#signup-birthday').value = result.birthday;
	M.updateTextFields(); // materiallize update
}


/* сохранения данных пользователя */
document.querySelector('#signup-submit').onclick = (event) => {
	event.preventDefault();
	let updateData = {
		 "email" : userEmail,
		 "name" : document.querySelector('#signup-name').value,
		 "pass" : document.querySelector('#signup-pass').value,
		 "birthday" : document.querySelector('#signup-birthday').value,
	};
	ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result) {
	if (result == 1) {
		 M.toast({html: 'Данные успешно приняты'});
	}
	else {
		M.toast({html: 'Ошибка'});
	}
}

  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
    	"format" : "yyyy-dd-mm"
    });
  });
