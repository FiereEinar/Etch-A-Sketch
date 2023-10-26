let color = "red";
let size = 16;
let draw = false;

function fillBoard(size) {
  const board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size*size; i++){
    const box = document.createElement("div");
    box.addEventListener("mouseover", changeColor);
    box.style.backgroundColor = "white";
    board.appendChild(box);
  }
}

fillBoard(size);

function changeSize(size){
  if (size >= 2 && size <= 100){
    fillBoard(size);
  }
}

function changeColor (){
    if (draw){
        this.style.backgroundColor = color;
    }
}

function colorChoice(choice){
  color = choice;
}

function resetBackground (){
  const board = document.querySelector(".board");
  const box = board.querySelectorAll("div");
  box.forEach(div =>{
    div.style.backgroundColor = "white";
  })
}

document.querySelector("body").addEventListener("click", (e)=>{
    if (e.target.tagName != "BUTTON"){
        draw = !draw;
        if (draw){
            document.querySelector(".mode").innerText = "draw";
        } else document.querySelector(".mode").innerText = "drawn't";
    }
})

