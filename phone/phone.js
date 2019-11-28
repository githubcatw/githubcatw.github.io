function newPhone(){
	var canvas = document.getElementById("phone");
	var ctx = canvas.getContext("2d");
	
	ctx.fillStyle = "#ffffff";
	ctx.rect(4, 4, 500, 500);
	
	ctx.fillStyle = "#000000";
	roundRect(ctx, 4, 4, 250, 550, 30, true);
	ctx.fillStyle = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
	
	var screen = Math.floor((Math.random() * 2) + 1);
	console.log("screen:" + screen);
	if (screen == 1)
	roundRect(ctx, 10, 10, 238, 538, 25, true);
	else if (screen = 2)
	roundRect(ctx, 4, 10, 250, 538, 25, true);
	
	/*
		1 = circle hole
		2 = center circle
		3 = notch
		4 = no hole
	*/
	var hole = Math.floor((Math.random() * 4) + 1);
	console.log("hole:" + hole);
	
	if (hole == 1) {
		ctx.beginPath();
		ctx.arc(230, 25, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'black';
		ctx.fill();
	} else if (hole == 2) {
		ctx.beginPath();
		ctx.arc(130, 25, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'black';
		ctx.fill();
	} else if (hole == 3) {
		ctx.beginPath();
		roundRect(ctx, 55, 10, 140, 20, {tl: 0, tr: 0, br: 20, bl: 20}, true);
		ctx.fillStyle = 'black';
		ctx.fill();
	} else if (hole == 4) {
	}
}
newPhone();