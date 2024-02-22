
const allSeat = document.getElementsByClassName("seat");

for(const seat of allSeat){
    seat.addEventListener("click",function(event){
console.log(event.target);
    })

    
}














function getValueById(id) {
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
  }