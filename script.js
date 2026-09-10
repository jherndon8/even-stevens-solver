function main() {
	const values = document.getElementById('input').value.split(/[\s,]+/)
	if (values.length > 7) {alert("Only input 7 numbers"); return;}
	const wrongVal = values.filter(x => x[0] < 1 || x[0]>8 || 'hdcs'.indexOf(x[1]) < 0)
	if (wrongVal.length) {alert("invalid value(s): " + wrongVal); return;}
	console.log(values)
	const encodedVals = values.map(x=>(Number(x[0]-1)<<2)+'hdcs'.indexOf(x[1]))
	const solution = []
	for (let i = 1; i < 1<<values.length; i++) {
		const included = []
		let doNotCheck = false
		let num = 0
		for (let j = 0; j < 7; j++) {
			if ((1<<j) & i) {
				included.push(j)
				doNotCheck = !doNotCheck
				num = num ^ encodedVals[j]
			}
		}
		if (doNotCheck || num) {continue;}
		solution.push(included.map(x=> values[x]))
		//solution.push(i, included, num);
	}
	
	if (solution.length == 0) {
		alert("No sets found. Add another card")
		return;
	}
	
	alert(solution.join('\n'));
}