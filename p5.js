var stdin = process.openStdin();
var odo = [];
var gas = [];
var totalDistance = 0;
var totalGas = 0;
var allGas
var index = 0;
stdin.addListener('data', function (data) {
	var string = data.toString();
	var inp = string.split(' ');
	odo.push(parseInt(inp[0]));
	gas.push(parseInt(inp[1]));
	totalDistance = odo[index] - odo[0];
	totalGas = 0;
	for (var i = 1; i < gas.length; i++) {
		totalGas += gas[i];
	}
	if (index >= 3) {
		console.log(totalDistance / totalGas);
		odo.shift();
		gas.shift();
	}
	else {
		index++;
	}
});