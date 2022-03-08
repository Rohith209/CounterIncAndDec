var count = 0;
var plusBtn = document.getElementsByClassName('plus');
var minusBtn = document.getElementsByClassName('minus');
var inputBox = document.getElementById('inputBox');
//const att = document.createAttribute("disabled");

// Set the value of the class attribute:

plusBtn[0].addEventListener("click", () => {
    count++;
    console.log(count);
    inputBox.value = count;
})
minusBtn[0].addEventListener("click", () => {
    count--;
    console.log(count);
    if (count > 0) {
        inputBox.value = count;
        // minusBtn[0].removeAttributeNode(att);
    }
    else if (count == 0) {
        inputBox.value = count;
    }
    else if (count < 0) {
        window.alert('Pass value > 0');
        return 0;
    }
})
inputBox.value = count;

