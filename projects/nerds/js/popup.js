/*script for open, close and work with popup-contact form in footer*/
var openIndexModal = document.querySelector(".contact-banner > button");
var formWriteUs = document.querySelector(".footer-contact-modal");
var closeButton = formWriteUs.querySelector(".modal-close");

openIndexModal.addEventListener("click", function(event) {
	event.preventDefault();
	formWriteUs.classList.add("show-modal");
});

closeButton.addEventListener("click", function(event) {
	event.preventDefault();
	formWriteUs.classList.remove("show-modal");
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		if(formWriteUs.classList.contains("show-modal")) {
			formWriteUs.classList.remove("show-modal");
		}
	};
});
