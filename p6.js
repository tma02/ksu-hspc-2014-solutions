var lastX = 0;
var lastY = 0;
var x = 0;
var y = 0;
var line = 0;
var ch = false;//true = h;false=v;
var lr = false;//right=true;left=false
var ud = false;//down = true;up=false;
var steps = process.argv[2];
for (var i = 0; i < steps; i++) {
	if (Math.abs(lastX - x) >= (line)) {
		ch = !ch;
		if (ch) {
			ud = !ud;
		}
		else {
			lr = !lr;
		}
		line+=0.5;
		lastX = x;
	}
	else if (Math.abs(lastY - y) >= (line)) {
		ch = !ch;
		if (ch) {
			ud = !ud;
		}
		else {
			lr = !lr;
		}
		line+=0.5;
		lastY = y;
	}
	if (ch) {
		if (lr) {
			x++;
		}
		else {
			x--;
		}
	}
	else {
		if (ud) {
			y--;
		}
		else {
			y++;
		}
	}
}
console.log(-x, y);