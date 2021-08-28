const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector("#check");

const output = document.querySelector("#text");

var sum = 0;
button.addEventListener("click", function clickbutton () {
    var newDate = Number(birthDate.value.replaceAll("-",""));
    
while (newDate > 0) {
sum = sum + (newDate % 10);
newDate = Math.floor(newDate / 10);

}
if (sum % luckyNumber.value === 0){
    output.innerText = "Yay! Your Birthday is Lucky! 🎊 🎉"
}else{
    output.innerText = "So Sad, Your birthday is not Lucky 🤒"
}

});