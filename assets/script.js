// Variables
// -- Modal variables
var playerModal = document.querySelector("#playerModal");
var menuModal = document.querySelector("#menuModal");
var controlsModal = document.querySelector("#controlsModal");
var yesModal = document.querySelector("#yesModal");
var noModal = document.querySelector("#noModal");
// --> Buttons
var continuePlayerBtn = document.querySelector("#continue-player");
var playGameBtn = document.querySelector("#continue-player");
var controlsBtn = document.querySelector("#continue-player");
var controlsBtn = document.querySelector("#continue-player");
var controlsBtn = document.querySelector("#continue-player");
var controlsBtn = document.querySelector("#continue-player");

// Modals Section
playerModal.style.display = "block";
continuePlayerBtn.addEventListener("click", function () {
	playerModal.style.display = "none";
	menuModal.style.display = "block";
});
