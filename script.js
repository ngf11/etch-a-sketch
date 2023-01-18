
let grid = document.getElementById("sketchGrid");
let gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++) {
  const square = document.createElement("div");
  square.classList.add("squares");
  grid.appendChild(square);
}
// fix this even
const divEvent = document.getElementsByClassName("squares");
        
        for(let i=0; i< divEvent.length; i++){
            divEvent[i].addEventListener('click',function(){
                if(this.style.backgroundColor === 'black'){
                    this.style.backgroundColor= 'whitesmoke';
                }else{
                    this.style.backgroundColor= 'black';
                }
            });
       }
       
          
          const eraseButton = document.getElementById('erase');
                eraseButton.addEventListener('click', event =>{
                    for (let i = 0; i < divEvent.length; i++) {
                        divEvent[i].style.backgroundColor = "whitesmoke";
                      }

                });

                const newGridButton = document.getElementById("new-grid");
                newGridButton.addEventListener("click", event => {
                  gridSize = prompt("Enter number of squares per side (up to 100) for the new grid:");
                  // validate user input
                  if (gridSize > 100) {
                    gridSize = 100;
                  }
                  if (gridSize < 1) {
                    gridSize = 1;
                  }
                  // remove existing grid
                  grid.innerHTML = "";
                  // create new grid
                  for (let i = 0; i < gridSize * gridSize; i++) {
                    const square = document.createElement("div");
                    square.classList.add("squares");
                    square.style.width = `${960 / gridSize}px`;
                    square.style.height = `${480 / gridSize}px`;
                    grid.appendChild(square);
                  }
                  // add event listeners to new squares
                  const divEvent = document.getElementsByClassName("squares");
                  for (let i = 0; i < divEvent.length; i++) {
                    divEvent[i].addEventListener("click", function() {
                      if (this.style.backgroundColor === "black") {
                        this.style.backgroundColor = "whitesmoke";
                      } else {
                        this.style.backgroundColor = "black";
                      }
                    });
                  }
                });
                
