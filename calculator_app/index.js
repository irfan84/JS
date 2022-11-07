const resultLabel = document.getElementById("resultLabel");

const push = (data) => {
const pushedValue = data.innerHTML;

if(pushedValue == 'AC') {
    resultLabel.innerHTML = 0;
}
else if(pushedValue == '='){
    resultLabel.innerHTML = eval(resultLabel.innerHTML)
}
else {
    if (resultLabel.innerHTML == '0') {
        resultLabel.innerHTML =  pushedValue;
    }
    else {
        resultLabel.innerHTML += pushedValue
    }
}
}