function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColorByNumber(number, max) {
    const greenValue = Math.floor((number / max) * 255);
    return `rgb( 0, ${greenValue}, 0)`;
}

const table = document.getElementById('dynTable');
const cells = table.getElementsByTagName('td');

function fillTable() {
    for( let i = 0; i < cells.length; i++){
        cells[i].textContent = getRandomNumber(1, 10000);
    }
}

function getMaxMin() {
    let maxNumber = -Infinity;
    let minNumber = Infinity;
    for(let i = 0; i < cells.length; i++){
        const number = parseInt(cells[i].textContent, 10);
        if (number < minNumber){
            minNumber = number;
        }
        if (number > maxNumber){
            maxNumber = number;
        }
    }
    document.getElementById('numberMin').textContent = `Минимальное значение: ${minNumber}`;
    document.getElementById('numberMax').textContent = `Минимальное значение: ${maxNumber}`;
    return { maxNumber, minNumber };
}

function colorCells() {
    let { maxNumber } = getMaxMin();
    for( let i = 0; i < cells.length; i++){
        const number = parseInt(cells[i].textContent, 10);
        if (number > maxNumber){
            maxNumber = number;
        }
        cells[i].style.backgroundColor = getColorByNumber(parseInt(cells[i].textContent, 10), maxNumber);
    }
}

fillTable();
getMaxMin();
colorCells();