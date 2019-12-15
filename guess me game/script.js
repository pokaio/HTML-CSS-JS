let items = ['cat', 'dog', 'bird', 'fish', 'lion', 'turtle', 'monkey', 'elephant', 'rabbit'];
let activated = false;

document.getElementById('randomButton').onclick = function () {
    if (!activated) {
        activated = true;
        let rnd = items[Math.floor(Math.random() * items.length)];
        let count = 3;
        let start = setInterval(function () {
            count--;
            if (count == 0) {
                clearInterval(start);
            }
            document.getElementById('input').innerHTML = count + 1;
        }, 1000);
        setTimeout(function () {
            document.getElementById('input').innerHTML = rnd;
            activated = false;
        }, 4000);
    }
};