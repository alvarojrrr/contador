var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click", increment);

function increment(){
currentNumber = currentNumber + 1;
document.getElementById("currentNumber").innerHTML = currentNumber;
}


document.getElementById("subtrair").addEventListener("click", decrement);

function decrement(){
    currentNumber = currentNumber - 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;
    
    if (currentNumber < 0){
     
        document.getElementById("currentNumber").style.color ='red';
    }
    else{
        document.getElementById("currentNumber").style.color ='grey';
    }
}

