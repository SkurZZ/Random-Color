const mainElement = document.querySelector('main');
const clickButton = document.getElementById('clickMe');
const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const hexDisplay = document.getElementById('showHex');

clickButton.addEventListener('click', function () {
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += hexDigits[Math.floor(Math.random() * 16)];
    }

    console.log(randomColor);
    hexDisplay.innerText = randomColor;
    mainElement.style.backgroundColor = randomColor;
});
