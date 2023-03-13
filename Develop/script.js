// Assignment Code

var lists= [ "A", "B", "C", "D", "E", "F", "J", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
"8", "9", "!",	"#",	"$",	"%","&",	"'",	"*",	"+", "‑",	".", "]"];

var wholeNumber = Math.floor(Math.random() *lists.length);
var passwordText = lists[wholeNumber];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

function generatePassword() {
 
var customerData = prompt("How many characters would you like to include in your passward ?"); 
 
 var lowerCase = prompt("Would you like to include  lowercase characters in your passward ?"); 

 var upperCase = prompt("Would you like to include  uppercase characters in your passward ?"); 

 var specialChars = prompt("Would you like to include special characters in your passward ?"); 

 var numbers = prompt("Would you like to include numbers characters in your passward ?"); 
}

if (customerData >= 15 &&
    lowerCase.value == yes &&
    upperCase.value==true &&
    pecialChars.value == yes &&
    numbers.value == yes)
    {
      generatePassword();
    }   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

    