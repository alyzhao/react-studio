function test() {
	let span = document.createElement('span')
	span.innerText = 'test';
	document.getElementById('app').appendChild(span);
}

export { test };