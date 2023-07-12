let taskBar = document.getElementsByClassName("taskBar")[0];
let startMenu = document.getElementsByClassName("startMenu")[0];
console.log("chal ");

taskBar.addEventListener("click", () => {
	if (startMenu.style.bottom == "50px") {
		console.log("chal ");
		startMenu.style.bottom = "-550px";
	} else {
		startMenu.style.bottom = "50px";
	}
});
