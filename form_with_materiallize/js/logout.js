/* Разлогинить */

document.querySelector('#logout').onclick = () => {
	let c = document.cookie;
	let d = new Date();
	d.setTime(d.getTime() - (60*1000));
	let expires = d.toUTCString();
	document.cookie = `${c}; expires=${expires}; path=/`;
	location.reload();
}