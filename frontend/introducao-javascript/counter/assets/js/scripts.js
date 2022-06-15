/*const currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

const increment = document.getElementById("adicionar") // interage com o botão adiconar
const decrement = document.getElementById("subtrair") // interage com o botão subtrair
var result = document.getElementById("currentNumber") // interage com o resultado

let currentNumber = 0

// função para mudar a cor do texto conforme o resultado das interações
function changeColor(){
    if(currentNumber < 0){
        result.style.color = "rgb(252, 22, 22)"
    } else if(currentNumber > 0) {
        result.style.color = "rgb(112, 252, 147)"
    } else {
        result.style.color = "aliceblue"
    }
}


increment.addEventListener("click", changeValue1, false);
decrement.addEventListener("click", changeValue2, false);

function changeValue1(){    
    if (currentNumber < 10){
        currentNumber ++
        result.innerHTML = currentNumber
        changeColor()
    }else {
        alert("Limite para adicionar contador atingido")
    }
}

function changeValue2(){
    if (currentNumber > -10){
        currentNumber --
        result.innerHTML = currentNumber
        changeColor()
    }else {
        alert("Limite para reduzir contador atingido")
    }
}

