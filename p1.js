var length = process.argv[2];
var time = process.argv[3];
var x = process.argv[4];
var yourSpeed = length / time * 60 * 60;
var herSpeed = x * yourSpeed;
console.log(herSpeed);
