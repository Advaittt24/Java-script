const num1 = parseInt(prompt("Enter First number : "))
const num2 = parseInt(prompt("Enter Second number : "))

let oprator = prompt("Enter a oprator")

if (oprator == "+"){
    console.log(num1+num2)
}
else if (oprator == "-" ){
    console.log(num1-num2)
}
else if (oprator == "*"){
    console.log(num1*num2)
}
else if (oprator == "/"){
    console.log(num1/num2)
}
else {
    console.log("Enter a valid input.")
}
