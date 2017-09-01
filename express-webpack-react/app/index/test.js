function test() {
	let span = document.createElement('span')
	span.innerText = 'test1111';
	document.getElementById('app').appendChild(span);
	console.log('test111111');
}

export { test };