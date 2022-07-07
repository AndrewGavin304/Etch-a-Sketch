//create flex container with margin auto, align-items center, justify-content center
function createContainer() {

const newDiv = document.createElement("div")
newDiv.setAttribute("display", "flex")
newDiv.setAttribute("margin", "auto")
newDiv.setAttribute("align-items", "center")
newDiv.setAttribute("justify-content", "center")
newDiv.setAttribute("id", "gridContainer")
document.body.appendChild(newDiv)

}

createContainer()

//create create function that creates 16 flex column 'topDiv's with specified width/height, 0margin, 0padding

function createGrid(rows, columns) {

    for (let i = 0; i < rows; i++) {
        const newDiv = document.createElement("div")
        newDiv.setAttribute("height", "20")
        newDiv.setAttribute("width", "20")
    }

}

//for each topDiv, append 15 child divs 