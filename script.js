var name = prompt("Please, enter your name:");
    if (!name) {
        alert("Please, enter your name!");
    }
	let fruits = ['frute1.png', 'frute2.png', 'frute3.png'];
    function random() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}
function start() {
    let resultElement = document.getElementById('result');
    let slots = ['slot1', 'slot2', 'slot3'];
    for (let slot of slots) {
        document.getElementById(slot).style.backgroundImage = `url(${random()})`;
    }
    if (check(slots)) {
        resultElement.innerText = `${name} you win!`;
    } else {
        resultElement.innerText = `Try again ${name}.`;
    }
}
function check(slots) {
    let firstSlotValue = document.getElementById(slots[0]).style.backgroundImage;
    return slots.every(slot => document.getElementById(slot).style.backgroundImage === firstSlotValue);
}