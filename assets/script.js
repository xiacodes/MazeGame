// Variables
// -- Modal variables
var playerModal = document.querySelector("#playerModal");
var menuModal = document.querySelector("#menuModal");
var controlsModal = document.querySelector("#controlsModal");
var yesModal = document.querySelector("#yesModal");
var noModal = document.querySelector("#noModal");
var playerName;
// --> Buttons
var continuePlayerBtn = document.querySelector("#continue-player");
var playGameBtn = document.querySelector("#playgame");
var controlsBtn = document.querySelector("#controls");
var controlsMenuBtn = document.querySelector("#controlsMenuBtn");
var playAgainBtn = document.querySelector(".pg-btn");

function startPage() {
	// Modals Section
	player = " ";
	playerModal.style.display = "block";

	// Player name modal
	continuePlayerBtn.addEventListener("click", function () {
		playerModal.style.display = "none";
		menuModal.style.display = "block";
		player = getName();
	});
	// Play game modal
	playGameBtn.addEventListener("click", function () {
		menuModal.style.display = "none";
	});
	// Controls Modal
	controlsBtn.addEventListener("click", function () {
		menuModal.style.display = "none";
		controlsModal.style.display = "block";
	});
	controlsMenuBtn.addEventListener("click", function () {
		controlsModal.style.display = "none";
		menuModal.style.display = "block";
	});

	// Main Screen
	document.querySelector("#playerName").innerText =
		document.getElementById("playerTextBx").value;
}

// Adding the player's name
function getName() {
	x = document.getElementById("playerTextBx");
	x = x.value;
	return x;
}

startPage();
