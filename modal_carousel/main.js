
document.addEventListener('DOMContentLoaded', ()=> {
	/* open modal window */
	document.querySelectorAll('.modal-open').forEach((element) => {
		element.onclick = openModal;
	});
	/* Close modal window */
	document.querySelectorAll('.modal-close').forEach((element) => {
		element.onclick = closeModal;
	});
	/* Click on overlay*/
	document.querySelectorAll('.modal-overlay').forEach((element) => {
		element.onclick = closeModal;
	});

	function openModal(e) {
		e.preventDefault();
		let modalId = this.dataset.modal;
		let modalElem = document.querySelector('.modal[data-modal="' + modalId +'"]');

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
		let modalElem = document.querySelector('.modal[data-modal="' + modalId +'"]');
		
		modalElem.classList.remove('active');
		overlay.classList.remove('active');
	}
});

document.querySelector('.form-slider-click').onclick = () => {
	document.querySelector('.form-slider').style.marginLeft = '-30vw';
}

document.querySelector('.form-slider-back').onclick = () => {
	document.querySelector('.form-slider').style.marginLeft = '0';
}