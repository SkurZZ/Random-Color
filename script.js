const main = document.querySelector('main');
const btn = document.getElementById('clickMe');
const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const hexText = document.getElementById("showHex")

btn.addEventListener('click', function () {
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += hexDigits[Math.floor(Math.random() * 16)];
    }

    console.log(cor);
    hexText.innerText = `${cor}`
    main.style.backgroundColor = cor;
});
