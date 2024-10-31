/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

/* 
making the function take in the password and user input
first checking if the password is correct or something else in entered like reset or forgot 
then if none of the options are entered (correct pass, forgot, or reset) then they will be denied access 
that is why it is the last else statement 

i first checked forgot and reset because if its true AND is one of those special cases it would log out a unique message 
then if its just true it can log out access granted
*/

function passwordCheck(password, userInput) {
    if (userInput === "forgot" && password === "forgot"){
        console.log("Access Granted!" + " This password you set should not be used because it glitches the system")
    } else if (userInput === "forgot"){    
        console.log("Here is a hint")
    } else if (userInput === "reset" && password === "reset"){
        console.log("Access Granted!" + " This password you set should not be used because it glitches the system")
    } else if (userInput === "reset"){
        console.log("Let's reset your account")
    } else if (password === userInput && password.length >= 5){
        console.log("Access Granted!")
    } else if (password === userInput && password.length < 5){
        console.log("Your password is too short!")
    } else {
        console.log("Access Denied!")
    }
}


passwordCheck("passw0rd","forgot")

















