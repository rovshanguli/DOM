//HomewWork
let firstInput = document.getElementById("firstinput");
let secondInput = document.getElementById("secondinput");
let result = document.querySelector(".result");
let btnTimes = document.getElementById("times");
let btnDivide = document.getElementById("divide");
let btnPilus = document.getElementById("pilus");
let btnMinus = document.getElementById("minus");


btnTimes.onclick = function () {
    let firstValue = firstInput.value;
    let secondValue = secondInput.value;
    resultValue = firstValue * secondValue;
    result.value = resultValue;
    firstInput.value = "";
    secondInput.value = "";
}

btnDivide.onclick = function () {
    let firstValue = firstInput.value;
    let secondValue = secondInput.value;
    if (secondValue != 0) {
        resultValue = firstValue / secondValue;
        result.value = resultValue;
    }else{
        result.value = "0-a bolme yoxdur";
    }
    firstInput.value = "";
    secondInput.value = "";
}

btnPilus.onclick = function () {
    let firstValue = parseInt(firstInput.value);
    let secondValue = parseInt(secondInput.value);
    resultValue = firstValue + secondValue;
    result.value = resultValue;
    firstInput.value = "";
    secondInput.value = "";
}

btnMinus.onclick = function () {
    let firstValue = parseInt(firstInput.value);
    let secondValue = parseInt(secondInput.value);
    resultValue = firstValue - secondValue;
    result.value = resultValue;
    firstInput.value = "";
    secondInput.value = "";
}






//Practies
let txtInput = document.querySelector(".text-input");
let btn = document.getElementById("add-btn");
let parentLi = document.querySelector(".parent-li")

btn.addEventListener("click", function () {

    if (txtInput.value == "") {
        alert("Bosh buraxmayin");
        return;
    }

    

    let li = document.createElement("li");
    let icon = document.createElement("i");
    icon.className = "fas fa-times pt-1";
    icon.style.float = "right";
    icon.style.cursor = "pointer";
    li.classList.add("list-group-item");
    li.classList.add("test");
    li.innerText = txtInput.value;
    li.append(icon);
    parentLi.append(li);



    icon.onclick = function(){
        li.remove();
    }
    txtInput.value = "";
})