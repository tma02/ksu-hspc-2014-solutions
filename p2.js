function rec(n, k) {
	return (k > n) ? 0 : (k == 0) ? 1 : (process.argv[4] * rec(n - 1, k - 1)) + ((1 - process.argv[4]) * rec(n - 1, k));
}
console.log(rec(process.argv[2], process.argv[3]));