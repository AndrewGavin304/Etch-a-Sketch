//create flex container with margin auto, align-items center, justify-content center
function createContainer() {
const width = '800px';
const height = '800px';
const newDiv = document.createElement("div")
newDiv.style.cssText = "display:flex; flex-wrap: wrap; margin:auto; align-items: center; justify-content: center; padding:0px; background-color: gray"
newDiv.setAttribute("id", "gridContainer")
newDiv.style.width = width;
newDiv.style.height = height;
document.body.appendChild(newDiv)
}

//create create function that creates 16 flex column 'topDiv's with specified width/height, 0margin, 0padding

function createGrid(divs, rows, columns) {
    for (let i = 0; i < (divs); i++) {
        const newDiv = document.createElement("div")
        newDiv.style.cssText = "display: flex; margin: 0px; padding: 0px"
        newDiv.setAttribute("class", "box")
        newDiv.style.width = `${800/columns}px`
        newDiv.style.height = `${800/rows}px`
        document.getElementById("gridContainer").appendChild(newDiv)
    }
}

function customGrid() {
let rows = prompt("How many rows do you want in your etch-a-sketch?", "16")
let columns = prompt("How many columns do you want in your etch-a-sketch?", "16")
let divs = rows * columns
clearPad()
createGrid(divs, rows, columns)
enableSketch()
}

function enableSketch() {
    const boxes = document.querySelectorAll(".box")
    boxes.forEach( box =>
    box.addEventListener("mouseover", function (e) {
        e.target.setAttribute("class", "hovered")
    })
)
}

function clearPad() {
    const boxes = document.querySelectorAll(".box")
    const hovered = document.querySelectorAll(".hovered")
    boxes.forEach( box => box.remove())
    hovered.forEach( hovered => hovered.remove())
}

createContainer()
createGrid(256, 16, 16)
enableSketch()


document.getElementById("custom").addEventListener("click", customGrid);
