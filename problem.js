//problem 1
//problem statement- Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
let number1=prompt('type the first number-');
let number2=prompt('type the second number-');
let max;
if(number1>number2){
    max=number1;
}
else{
    max=number2;
}
console.log("The maximum number between " + number1 + " & " + number2 + " is- " + max);



//problem 2
//problem statement- Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)
let number=prompt("Give me the number that you would like to check- ");
if(number==0){
    console.log('The number you have entered is actually 0');
}
else if(number<0){
    console.log('The number that you have entered is negative');
}
else{
    console.log('The number is positive');
}

//problem-3
//problem statement- Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)
let number=prompt("Type the number that you would like to check- ");
if(number%10==0){
    console.log('The number ' + number + " is divisible by 10");
}
else{
     console.log('The number ' + number + " is not divisible by 10");
}

//problem-4
//problem statement-Solve the problem with Javascript  to check whether a number is even or odd. 
let number=prompt("Type the number you would like to check- ");
if(number%2==0){
    console.log("The number " +number+ " is even");
}
else{
    console.log("The number " +number+ " is odd");
}

//problem-5
//problem statement- Solve the problem with Javascript  to check whether a character is in the alphabet or not.

let char=prompt('Type a character to check- ');
if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90 || char.charCodeAt(0)>=97 &&
char.charCodeAt(0)<=122 )
{
    console.log("Yes the character " +char + " is an alphabet");
}
else{
     console.log("No the character " +char + " is no an alphabet");
}




//problem-6
//problem  statement-Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)
let temp=prompt("Type the temperature- ");
if(temp>25 && temp<=30){
    console.log("The temperature is hot");
}
else if(temp <=25){
    console.log("The temperature is cold");
}
else {
    console.log("The temperature is normal");
}



//problem-7
//problem  statement-Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let number1=prompt("Type the first number- ");
let number2=prompt("Type the second number- ");
let number3=prompt("Type the third number- ");

if(number1 ==number2 && number1==number3){
    console.log('no number is greater in this regard');
}
else if(number1>number2 && number1>number3){
    console.log("number 1 is greater");
}
else if(number2>number1 && number2>number3){
    console.log("number 2 is greater");
}
else{
    console.log("number 3 is greater");
}


//problem-8
//problem statement- Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let number=prompt('Type the number that you want to check- ');
let result=(number%2==0)? 'Even Number' : 'Odd';
console.log(`${result}`);




//problem-9
//problem  statement-Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne=prompt('Type the first number- ');
let numTwo=prompt('Type the second number- ');
if(numOne>30 && numTwo>30){
    console.log('Both of the number ' +numOne + " " +numTwo + " " +"are greater than 30");
}



//problem -10
//problem statement- Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)

let age=prompt('Type your age- ');
if(age<0 || age==0){
    console.log('Please enter a valid age');
}
else if(age>=13 && age<=19){
    console.log('Teenager');
}
else{
    console.log('Not a teenager');
}




