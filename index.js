let clockElement = document.querySelector("#clock");
let offset = -90;

function timer() {
	let date = new Date();

	let milliseconds = date.getMilliseconds();
	let seconds = date.getSeconds();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	seconds += milliseconds / 1000;
	minutes += seconds / 60;
	hours += minutes / 60;

	if (hours > 12) {
		hours -= 12;
	}

	clockElement.style.setProperty("--seconds", offset + 6 * seconds + "deg");
	clockElement.style.setProperty("--hours", offset + 30 * hours + "deg");
	clockElement.style.setProperty("--minutes", offset + 6 * minutes + "deg");

	requestAnimationFrame(timer);
}

timer();


function changeTheme() {
	let date = new Date();
	let hour = date.getHours();
	link = document.getElementById("theme-link");

	if (hour >= 12 || hour <= 8) {
		link.setAttribute('href', './style/light.css');
	} else {
		link.setAttribute('href', './style/dark.css');
	}
}

changeTheme();