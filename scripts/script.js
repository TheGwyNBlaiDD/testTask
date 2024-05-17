function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColorByNumber(number, max) {
    const greenValue = Math.floor((number / max) * 255);
    return `rgb( 0, ${greenValue}, 0)`;
}

function fillTable() {
    const table = document.getElementById('dynTable');
    const cells = table.getElementsByTagName('td');
    for( let i = 0; i < cells.length; i++){
        cells[i].textContent = getRandomNumber(1, 10000);
        cells[i].style.backgroundColor = getColorByNumber(parseInt(cells[i].textContent, 10), 10000);
    }
}
fillTable();

