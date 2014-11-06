var string1 = process.argv[2];
var string2 = process.argv[3];
var l = string1.length > string2.length ? string1.length : string2.length;
var offset = 0;
var count1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var count2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (offset = 0; offset < l; offset++) {
	for (var i = 0; i < l; i++) {
		if (string1[i + offset] == string2[i]) {
			count1[offset]++;
			console.log(count1[offset]);
		}
		else if (string1[i] == string2[i + offset]) {
			count2[offset]++;
			console.log(count2[offset]);
		}
	}
}
var stringo1 = "";
var stringo2 = "";
var max1 = 0;
for (var q = 0; q < count1.length; q++) {
	if (count1[q] > count1[max1]) {
		max1 = q;
	}
}
var max2 = 0;
for (var q = 0; q < count2.length; q++) {
	if (count2[q] > count2[max2]) {
		max2 = q;
	}
}
for (var o = 0; o < max1; o++) {
	stringo1 += " ";
}
for (var o = 0; o < max2; o++) {
	stringo2 += " ";
}
if (max1 > max2) {
	stringo2 = "";
}
else {
	stringo1 = "";
}
console.log(stringo2 + string1);
console.log(stringo1 + string2);