let grid = document.getElementById("sketchGrid");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("squares");
  grid.appendChild(square);
}
// fix this event 
grid.addEventListener('mouseenters', event =>{
    event.target.style.backgroundColor ='solid balck'
})

