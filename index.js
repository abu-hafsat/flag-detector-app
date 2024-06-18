const colors = ["green", "orange", "red",];
const color2 = [ "white", "yellow",];
const color3 = ["green", "red",];

const side1 = document.getElementById("container-1");
const side2 = document.getElementById("container-2");
const side3 = document.getElementById("container-3");
const button = document.getElementById("click");
const text = document.getElementById("text");
button.addEventListener("click", function (){
    let random = getRandomNumber();
    let random2 = centre();
    let random3 = rightside();
    //document.body.style.backgroundColor = colors[random];
    side1.style.backgroundColor = colors[random];
    side2.style.backgroundColor = color2[random2];
    side3.style.backgroundColor = color3[random3];
if(side1.style.backgroundColor == colors[0]
     && side2.style.backgroundColor == color2[0]
     && side3.style.backgroundColor == color3[0]){
    text.innerText = "NIGERIA"
} else if(side1.style.backgroundColor == colors[0]
    && side2.style.backgroundColor == color2[0]
    && side3.style.backgroundColor == color3[1]){
   text.innerText = "NIGER"
} else if(side1.style.backgroundColor == colors[2]
    && side2.style.backgroundColor == color2[1]
    && side3.style.backgroundColor == color3[0]){
   text.innerText = "GUINEA"
} else if(side1.style.backgroundColor == colors[0]
        && side2.style.backgroundColor == color2[1]
        && side3.style.backgroundColor == color3[1]){
       text.innerText = "MALI"
} else if(side1.style.backgroundColor == colors[1]
    && side2.style.backgroundColor == color2[0]
    && side3.style.backgroundColor == color3[0]){
   text.innerText = "COTE'DEVOIRE"
} else {
    text.innerText = "NO COUNTRY MATCH"
}
});
    

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
function centre() {
    return Math.floor(Math.random() * color2.length);

}
function rightside (){
    return Math.floor(Math.random() * color3.length);

}