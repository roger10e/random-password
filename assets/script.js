// Assignment code here
var lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChars = [",", ".", "!", "@", "$", "%", "^", "&", "*"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey, you clicked the button!")
  var passwordArray = []
  var chosenPassword = []
  var characterArray = []

  //1. Prompt the user for password criteria
  //1a. Password length between 8 & 128
  //1b. include lowercase, uppercase, and special characters

  var passwordLength = Number(window.prompt("How long would you like your password to be?"))
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password needs to be between 8 and 128 characters!")
    return
  }

  //somehow ensure that the number provided is between 8 and 128 characters?

  var hasLower = window.confirm("Do you want to include lowercase letters?")
  var hasUpper = window.confirm("Do you want to include uppercase letters?")
  var hasNumber = window.confirm("Do you want to include numbers?")
  var hasSpecial = window.confirm("Do you want to include special characters?")

  if (hasLower == false && hasUpper == false && hasNumber == false && hasSpecial == false) {
    alert("You need to select at least one character type!")
    return
  }

  //somehow ensure that the answer provided is valid

  if (hasLower) {
    passwordArray = passwordArray.concat(lowerChars);
    console.log(passwordArray)
  }

  if (hasUpper) {
    passwordArray = passwordArray.concat(upperChars);
    console.log(passwordArray)
  }

  if (hasNumber) {
    passwordArray = passwordArray.concat(numberChars);
    console.log(passwordArray)
  }
  
  if (hasSpecial) {
    passwordArray = passwordArray.concat(specialChars);
    console.log(passwordArray)
  }


  //2. Generate password based on criteria
  for (var i = 0; i < passwordLength; i++) {
    // console.log(passwordArray.length)

    var randomNum = Math.floor(Math.random() * passwordArray.length)
    // console.log(randomNum)

    var randomLetter = passwordArray[randomNum]
    // console.log(randomLetter)

    chosenPassword.push(randomLetter);
  }
  
  console.log(chosenPassword)


  //3. Display generated password on the page




  return chosenPassword.join("").toString();
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
