
function BMI(height,weight){
    return weight/((height/100)**2);
}

let input1=document.getElementById("height");
let input2=document.getElementById("weight");

document.getElementById("calculateBtn")
.addEventListener("click",()=>{
    if(input1.value=="" || input2.value=="")return;

    let b=BMI(parseFloat(input1.value), parseFloat(input2.value));
    
    let ans;
    if(b<=18.5)ans="Under weight";
    else if(18.6<=b && b<=24.9)ans="Normal weight";
    else if(25<=b && b<=29.9)ans="Over weight";
    else ans="Obese";

    document.getElementById("result").textContent="Your BMI: "+ans;
});

let islight=true;
document.getElementById("theme")
.addEventListener("click",()=>{
    if(islight){
        document.body.style.backgroundColor="black";
        islight=false;
    }
    else{
        document.body.style.backgroundColor="white";
        islight=true;
    }
});