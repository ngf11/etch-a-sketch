let grid = document.getElementById("sketchGrid");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("squares");
  grid.appendChild(square);
}
// fix this even
const divEvent = document.getElementsByClassName("squares");
        
        for(let i=0; i< divEvent.length; i++){
            divEvent[i].addEventListener('click',function(){
                if(this.style.backgroundColor === 'black'){
                    this.style.backgroundColor= 'red';
                }else{
                    this.style.backgroundColor= 'black';
                }
            });
        }
          
          
          
        // for(let i=0; i< divEvent.length; i++){
        //     divEvent[i].addEventListener("mousedown",function(){
        //         this.style.backgroundColor= 'black'
                
        //     });
        // }