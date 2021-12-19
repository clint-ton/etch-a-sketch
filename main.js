// DOM Handle definitions

const slider = document.querySelector('#dimension');
const container = document.querySelector('#container');
const clearBtn = document.querySelector('#clear-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');


// flags for modes
let rainbow = false;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indgo', 'violet']
let colorIndex = 0;
// Function Defintions

function makeGrid () {

    // Deletes all divs from canvas
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    // Loops creating div grid based off slider value
    for (let i = 0; i < slider.value; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i = 0; i < slider.value; i++) {
            const div = document.createElement('div');
            div.classList.add('box');
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    
    // adds a mouse over event listener to every div
    nodeArray = Array.from(document.querySelectorAll('.box'));
    if (rainbow) {
        nodeArray.forEach(addMouseOverRainbow);
    } else {
        nodeArray.forEach(addMouseOver);
    }

}

function addMouseOver(node) {
    node.addEventListener('mouseover', function() {
        // Adds a css class with a different color on mouseover
        node.classList.add('coloured');
    })
}

function addMouseOverRainbow(node) {
    node.addEventListener('mouseover', function() {
        node.style.cssText = `background-color: ${colors[colorIndex++ % colors.length]}`;
    })
}

function clearCell (node) {
    node.classList.remove('colored');
}

function setRainbow () {
    rainbow = !rainbow;
    if (rainbow) {
        rainbowBtn.classList.add('rainbow');
    } else {
        rainbowBtn.classList.remove('rainbow');
    }
    makeGrid()
}

// Add event listeners (canvas event listeners in makeGrid)
clearBtn.addEventListener('click', makeGrid);
slider.addEventListener('input', makeGrid);
rainbowBtn.addEventListener('click', setRainbow);


// Draw inital canvas
makeGrid();

