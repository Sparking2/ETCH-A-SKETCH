


function createCanvas() {

    let containerDiv = document.getElementById('canvas');

    let container = document.createElement('div');
    container.style.backgroundColor = '#2196F3';
    container.style.padding = 10 + 'px';
    container.style.display = 'inline-grid';
    container.style.gridRowGap = '0';
    container.style.gridColumnGap = '0';
    container.id = 'grid';

    container.style.width = 512 + 'px';
    container.style.height = 512 + 'px';

    containerDiv.appendChild(container);
}

function createColumns(columnNumber) {
    let container = document.getElementById('grid');
    container.style.gridTemplateColumns = '';

    let columns = '';
    for(let i = 0; i < columnNumber; i++){
        columns = columns + 'auto ';
    }

    container.style.gridTemplateColumns = columns;
}

function createGrid(size) {

    let container = document.getElementById('grid');
    let pixelSize = 512/size

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let tile = document.createElement('div');
        tile.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        tile.style.width = pixelSize+'px';
        tile.style.height = pixelSize+'px';
        tile.addEventListener('mouseover', changeColor);
        container.appendChild(tile);
    }
}

function changeColor() {
    this.style.backgroundColor = 'black';
}

function reset() {
    let size = prompt('Grid Size?', 16);
    let elem = document.getElementById('grid');
    elem.parentNode.removeChild(elem);

    createCanvas();
    createColumns(size);
    createGrid(size);
}

createCanvas();
createColumns(16);
createGrid(16);