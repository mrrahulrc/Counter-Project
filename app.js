const container = document.getElementById("container");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById('resetBtn');

incBtn.addEventListener('click', () => {
	let currentValue = parseInt(container.innerText);
	container.innerText = ++currentValue;
});

resetBtn.addEventListener('click', () => {
	container.innerText = 1;
});