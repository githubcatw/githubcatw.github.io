/*
	Guess Number

	Beta 1 created 11/20/18
	
	2019 NUDev
*/

var hid = document.getElementsByClassName("hi")[0];       // Hidden div storing button num
var pointText = document.getElementById("points");        // The point text
var question = document.getElementById("question");       // The question text
var btns = document.getElementsByClassName("btn");        // An array of buttons

var oneStylizer = "<po style=\"color: #626e84\">I</po>";  // Used below to stylize

var r1 = 2;      // First random number
var r2 = 2;      // Second random number
var ra = 4;      // The above numbers multiplied
var inp = 0;     // Never used below (0 matches in this script)
var c = 0;       // The lucky button num
var points = 0;  // Current point count
var goal = 100;  // Point goal (100 like in the Unity version)
var time = 5000; // Time until game over
var loseTout;    // Lose timeout function

// Center single-digit numbers
var center = function(unst) {
	// Create a temporary variable
	var temp = "";
	// If the uncentered number is less than 10...
	if (unst < 10) {
		// stylize it
		temp = oneStylizer + unst + oneStylizer;
	// else...
	} else {
		// return original
		temp = unst.toString();
	}
	return temp;
}

function b1() { hid.innerHTML = "1"; clearTimeout(loseTout); Check(); }
function b2() { hid.innerHTML = "2"; clearTimeout(loseTout); Check(); }
function b3() { hid.innerHTML = "3"; clearTimeout(loseTout); Check(); }
function b4() { hid.innerHTML = "4"; clearTimeout(loseTout); Check(); }

// Randomize
function Randomize() {
	// Randomize the numbers
	r1 = Math.floor(Math.random() * 9) + 1;
	r2 = Math.floor(Math.random() * 9) + 1;
	// Multiply them
	ra = r1 * r2;
	// Write that in the debug console
	console.log(r1 + "x" + r2 + "=" + ra);
	// Judge
	Judge();
}

// Judge and randomize the button values
function Judge() {
	// Randomize a value that will be the lucky button number
	j = Math.floor(Math.random() * 3) + 0;
	// Set it
	btns[j].innerHTML = center(ra);
	// Update a variable
	c = j;
	// For all of the buttons...
	for (var i = 0; i < btns.length; i++) {
		// If it's the lucky button, do nothing, otherwise...
		if (i == j) { } else {
			// randomize the button's value
			btns[i].innerHTML = center(Math.floor(Math.random() * 55) + 1);
		}
	}
	// And update our texts
	UpdateText();
}

// Update texts
function UpdateText() {
	// Check for value hacks
	CheckForHacks();
	// If points equal the goal...
	if (points == goal) {
		// the user won
		Win();
	// Otherwise...
	} else {
		// Ask the user our question
		question.innerHTML = r1 + "x" + r2;
	}
	// Update the point text
	pointText.innerHTML = points + " point";
	// Pluralize
	if (!points.toString().endsWith("1")) pointText.innerHTML += "s";
	loseTout = setTimeout(function() {
		Lose();
	}, time);
}

// We win!!
function Win() {
	question.innerHTML = "YOU WIN";
	question.style = "background-color: #2db769";
}

// We lost :(
function Lose() {
	question.innerHTML = "GAME\nOVER";
	question.classList.add("gameover");
	for (var i = 0; i < btns.length; i++) {
		btns[i].disabled = true;
	}
}

// Do a hack check
function CheckForHacks() {
	// Value integrity check
	if (typeof r1 == 'number') { }
	else {
		alert("r1 is not a number.\nwere you trying to hack me?");
		r1 = 3;
	}
	if (typeof r2 == 'number') { }
	else {
		alert("r2 is not a number.\nwere you trying to hack me?");
		r2 = 3;
	}
	if (typeof ra == 'number') { }
	else {
		alert("ra is not a number.\nwere you trying to hack me?");
		ra = 9;
	}
}

// Check the answer
function Check() {
	// Get the clicked button
	var c = parseInt(hid.innerHTML) - 1;
	// And get its id
	var co = parseInt(btns[c].innerHTML.split(oneStylizer).join(""));
	// Points
	if (co == ra) {
		points = points + 1;
	} else {
		points = points - 1;
	}
	// Randomize, restarting the game loop
	Randomize();
}

// This is used to start the loop
Randomize();