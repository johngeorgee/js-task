// Problem 1 - guessing game
let min = 1;
let max = 10;
let random = Math.floor(Math.random() * (+max - +min)) + 
             +min;
console.log("Random Number Generated : " + random);
while (true) {
    let num=Number(prompt("Guess a number from 1 to 10"))
    if ( num == random){
        console.log("good guess")
        break;
    } else {
        console.log("try again")
    }
}










//Problem 2 - Multiplication Table
let x=parseInt(prompt("please insert a number"))
let mul=1
for(i=1; i<=12; i++){
    mul=x*i;
    console.log("Multiplication table from 1 to 12 for",x ,"is",x,"*",i,"=",mul)
}










//Problem 3 - Simple Caculator
let n1=parseInt(prompt("Enter first number"))
let char=prompt("Enter operation")
let n2=parseInt(prompt("Enter second number"))
let result;
switch (char) {
        case "+":
        result=n1+n2;
        console.log(n1, char,n2,"=",result);
        
        break;
        case "-":
            result=n1-n2;
            console.log(n1, char,n2,"=",result);
        break;
        case "*":
            result=n1*n2;
            console.log(n1, char,n2,"=",result);
        break;
        case "/":
            result=n1/n2;
            console.log(n1, char,n2,"=",result);
        break;
        default:
            console.log("error");
        break;
}











//Problem 4 - factorial
let fact=1;
y=parseInt(prompt("Enter a number to calculate factorial of entered number"))
for(let i=1; i<=y; i++){
    fact*=i;
}
console.log("the factorial of",y,"=",fact);









//Problem 5 - word reverse
let s = prompt("Enter a Word");
let ans = s.split('').reverse().join('');
console.log(ans);
    
