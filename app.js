const menuEl = document.querySelector('.menu');
const absoEl = document.querySelector('.absoEl');

let click = 0;

menuEl.addEventListener("click", () => {
   click++
   absoEl.style.right = "0%"
   menuEl.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>'
   if(click === 2){
        click = 0
        absoEl.style.right = "-30%"
        menuEl.innerHTML = '<div class="menu"> <div class="lines"></div> <div class="lines"></div> <div class="lines"></div> </div>'
   } 
})