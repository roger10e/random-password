// Assignment code here
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "1234567890";
var specialChars = ",.!@$%^&*'";
var allChars = lowerChars + upperChars + numberChars + specialChars;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, you clicked the button!")
  
  //1. Prompt the user for password criteria
  //1a. Password length between 8 & 128
  //1b. include lowercase, uppercase, and special characters
  
  var passwordLength = Number(window.prompt("How long would you like your password to be?"))
  console.log(passwordLength)
  //somehow ensure that the number provided is between 8 and 128 characters?

  var characterChoice = window.prompt("What sort of characters would you like your password to contain (lowercase, uppercase, special)?")
  console.log(characterChoice)
  //somehow ensure that the answer provided is valid


  //2. Generate password based on criteria
  
  //3. Display generated password on the page




  return "Generated password will go here!";
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
