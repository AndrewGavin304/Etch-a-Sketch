//create flex container with margin auto, align-items center, justify-content center
function createContainer(rows, columns) {
const width = rows * 30;
const height = columns * 30
const newDiv = document.createElement("div")
newDiv.style.cssText = "display:flex; flex-wrap: wrap; margin:auto; align-items: center; justify-content: center; padding:0px; background-color: gray"
newDiv.setAttribute("id", "gridContainer")
newDiv.style.width = width+"px";
newDiv.style.height = height+"px";
document.body.appendChild(newDiv)
}

//create create function that creates 16 flex column 'topDiv's with specified width/height, 0margin, 0padding

function createGrid(divs) {
    for (let i = 0; i < divs; i++) {
        const newDiv = document.createElement("div")
        newDiv.style.cssText = "display: flex; margin: 0px; padding: 0px"
        newDiv.setAttribute("class", "box")
        newDiv.style.width = "30px";
        newDiv.style.height = "30px";
        document.getElementById("gridContainer").appendChild(newDiv)
    }
}

let rows = prompt("How many rows do you want in your etch-a-sketch?", "16")
let columns = prompt("How many columns do you want in your etch-a-sketch?", "16")
let area = rows * columns

createContainer(rows, columns)
createGrid(area)

const boxes = document.querySelectorAll(".box")

boxes.forEach( box =>
    box.addEventListener("mouseover", function (e) {
        e.target.setAttribute("class", "hovered")
    })
)
