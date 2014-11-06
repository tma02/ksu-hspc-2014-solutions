var dollars = process.argv[2];
var cr1 = process.argv[3];
var fee1 = process.argv[4];
var cr2 = process.argv[5];
var fee2 = process.argv[6];

function getMoney(dollar, cr, fee) {
	dollar = dollar * (1 - (fee / 100));
	return cr * dollar;
}

var a1 = getMoney(dollars, cr1, fee1);
var a2 = getMoney(dollars, cr2, fee2);

console.log(a1 > a2 ? "BOOTH 1" : "BOOTH 2");
console.log(Math.abs(a1 - a2));
console.log(a1 > a2 ? a1 : a2);