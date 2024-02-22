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
//  function updateGrandTotal(){
//     const totalCost=getConvertedValue("tk-total");

//     document.getElementById("tk-grand").innerText=totalCost;
//  }

//5th   according to 4th work
function updateGrandTotal(status){
    const totalCost=getConvertedValue("tk-total");
    if(status==undefined){
        document.getElementById("tk-grand").innerText=totalCost;
    } 
    else{
        const couponCode=document.getElementById("coupon-code").value;

        if(couponCode=="NEW15"){
            const discount= totalCost*0.15;
            document.getElementById("tk-grand").innerText=totalCost-discount;
        }

        else if(couponCode=="Couple 20"){
            const discount= totalCost*0.2;
            document.getElementById("tk-grand").innerText=totalCost-discount;
        }
        else{
            alert("you are not get discount ");
        }
            
    }
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