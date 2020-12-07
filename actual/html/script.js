
var audio = new Audio('../assets/sounds/Claves.wav'); 

var interval;
function tap() {
	var bpm = document.getElementById("bpm").value;
	console.log(bpm);
	if (bpm == null || bpm == "") {
		bpm = 60;
	} 

	interval = window.setInterval(playMet, 1000*(1/(bpm/60)));
	console.log(bpm);

	function playMet() {
		audio.play();
	}
}

function stop() {
	window.clearInterval(interval);
}
