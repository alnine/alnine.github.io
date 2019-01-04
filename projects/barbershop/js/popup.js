
// script for open, close and work with popup-form for enter in profile

var link = document.querySelector(".login");
var modalEnter = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var closeModal = modalEnter.querySelector(".modal-content-close");
var form = modalEnter.querySelector("form.login-form");
var login = form.querySelector("[name=login]");
var password = form.querySelector("[name=password]");
var storageLogin = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	modalEnter.classList.add("modal-show-bounce");
	overlay.classList.add("modal-show");

	if(storageLogin) {
		login.value = storageLogin;
		password.focus();
	} else {
		login.focus();
	}
});

closeModal.addEventListener("click", function(event) {
	event.preventDefault();
	modalEnter.classList.remove("modal-show-bounce");
	overlay.classList.remove("modal-show");
	if(modalEnter.classList.contains("modal-form-error")) {
	  	modalEnter.classList.remove("modal-form-error");
	}
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
	  	if(modalEnter.classList.contains("modal-show-bounce")) {
	  		modalEnter.classList.remove("modal-show-bounce");
	  	}
	  	if(modalEnter.classList.contains("modal-form-error")) {
	  		modalEnter.classList.remove("modal-form-error");
	  	}
	  	if(overlay.classList.contains("modal-show")) {
	  		overlay.classList.remove("modal-show");
	  	}
	}
});

overlay.addEventListener("click", function(event) {
	if(overlay.classList.contains("modal-show")) {
		overlay.classList.remove("modal-show");
	}
	if(modalEnter.classList.contains("modal-show-bounce")) {
		modalEnter.classList.remove("modal-show-bounce");
	}
	if(modalEnter.classList.contains("modal-form-error")) {
	  	modalEnter.classList.remove("modal-form-error");
	}
});

form.addEventListener("submit", function(event) {
	if(!login.value || !password.value) {
	  	event.preventDefault();
	  	modalEnter.classList.add("modal-form-error");
	} else {
	  	localStorage.setItem("login", login.value);
	  	if(modalEnter.classList.contains("modal-form-error")) {
	  		modalEnter.classList.remove("modal-form-error");
	  	}
	}
});

// script for open and close popup-map on index page

var modalMap = document.querySelector(".modal-content-map");
var openMap = document.querySelector(".map-show");
var closeModalMap = modalMap.querySelector(".modal-content-close");

openMap.addEventListener("click", function(event) {
	event.preventDefault();
	modalMap.classList.add("modal-show");
	overlay.classList.add("modal-show");
});

closeModalMap.addEventListener("click", function(event) {
	event.preventDefault();
	modalMap.classList.remove("modal-show");
	overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
	  	if(modalMap.classList.contains("modal-show")) {
	  		modalMap.classList.remove("modal-show");
	  	}
	  	if(overlay.classList.contains("modal-show")) {
	  		overlay.classList.remove("modal-show");
	  	}
	}
});

overlay.addEventListener("click", function(event) {
	if(overlay.classList.contains("modal-show")) {
		overlay.classList.remove("modal-show");
	}
	if(modalMap.classList.contains("modal-show")) {
		modalMap.classList.remove("modal-show");
	}
});
