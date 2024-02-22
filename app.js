//  2nd work....
const allSeat = document.getElementsByClassName("seat");

for(const seat of allSeat){
    seat.addEventListener("click",function(event){

        const nameofSeat=event.target.innerText;
//console.log(event.target.innerText);
// const classType="Economy";
const perSeatPrice=550;
console.log(typeof perSeatPrice);

// const convertedPerSeatPrice=perseInt("perSeatPrice");
// console.log(convertedPerSeatPrice);



const appendWork=document.getElementById("for-append-place");
 
const div=document.createElement("div");
div.classList.add("flex");
div.classList.add("gap-20");
// div.classList.add("justify-evently");
const p1=document.createElement("p");
const p2=document.createElement("p");
const p3=document.createElement("p");

p1.innerText=nameofSeat;
p2.innerText='Economy';
p3.innerText='550';

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

appendWork.appendChild(div);



updateTotalCost(perSeatPrice);   //3th work

updateGrandTotal();  //4th work 
    });    
}

// 4yh work.................
 function updateGrandTotal(){
    const totalCost=getConvertedValue("tk-total");

    document.getElementById("tk-grand").innerText=totalCost;
 }



//  3th work
function updateTotalCost(value){
    const totalCost=getConvertedValue("tk-total");

    const sum=totalCost + parseInt(value);
    document.getElementById("tk-total").innerText=sum;
}

// 1st work ....
function getConvertedValue(id) {
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement);
  }