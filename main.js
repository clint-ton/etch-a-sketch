function makeGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('box');
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function addMouseOver(node) {
    node.addEventListener('mouseover', function() {
        node.classList.add('coloured');
    })
}

const container = document.querySelector('#container');



makeGrid(16);

nodeArray = Array.from(document.querySelectorAll('.box'));

nodeArray.forEach(addMouseOver);