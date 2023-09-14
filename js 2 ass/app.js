
            // Q1

function checkCharacterType(inputChar) {
    // Convert the input character to its ASCII code
    const charCode = inputChar.charCodeAt(0);
  
    if (charCode >= 48 && charCode <= 57) {
      return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
      return "Uppercase Letter";
    } else if (charCode >= 97 && charCode <= 122) {
      return "Lowercase Letter";
    } else {
      return "Other";
    }
  }
  
  const userInput = prompt("Enter a character (number or string):");
  const characterType = checkCharacterType(userInput);
  
  if (characterType !== "Other") {
    console.log(`The input '${userInput}' is a ${characterType}.`);
  } else {
    console.log(`The input '${userInput}' is not a number, uppercase letter, or lowercase letter.`);
  }
   
                // Q2

// Function to compare two integers and display the larger one
function findLargerNumber(num1, num2) {
    if (num1 > num2) {
      console.log(`The larger number is: ${num1}`);
    } else if (num2 > num1) {
      console.log(`The larger number is: ${num2}`);
    } else {
      console.log("Both numbers are equal.");
    }
  }
  
  // Prompt the user to enter two integers
  const input1 = parseInt(prompt("Enter the first integer:"));
  const input2 = parseInt(prompt("Enter the second integer:"));
  
  // Check if the inputs are valid integers
  if (!isNaN(input1) && !isNaN(input2)) {
    findLargerNumber(input1, input2);
  } else {
    console.log("Invalid input. Please enter two valid integers.");
  }
              
                // Q3

// Prompt the user to enter a number
const useInput = parseFloat(prompt("Enter a number:"));

// Check if the input is a valid number
if (!isNaN(useInput)) {
  if (useInput > 0) {
    console.log("The number is positive.");
  } else if (useInput < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
 
                //  Q4

// Function to check if a character is a vowel
function isVowel(character) {
    const vowels = "AEIOUaeiou"; // List of vowels
  
    // Check if the character is in the list of vowels
    if (vowels.includes(character)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Prompt the user to enter a character
  const usernput = prompt("Enter a character (a single letter):");
  
  // Check if the input is a single character
  if (usernput.length === 1) {
    const isInputVowel = isVowel(usernput);
  
    if (isInputVowel) {
      console.log(`"${usernput}" is a vowel.`);
    } else {
      console.log(`"${usernput}" is not a vowel.`);
    }
  } else {
    console.log("Invalid input. Please enter a single character.");
  }
  
                    // Q6
    //  (A)

// Store the correct password in a variable
const correctPassword = "your_password_here";

// You should replace "your_password_here" with the actual correct password.

// Define the correct password
const correcPassword = "your_password_here";

// Ask the user to enter their password
const userPassword = prompt("Please enter your password:");

// Check if the user's password matches the correct password
if (userPassword === correctPassword) {
  console.log("Access granted. Welcome!");
} else {
  console.log("Incorrect password. Access denied.");
}

// Function to validate passwords
function validatePasswords(password1, password2) {
    if (password1 === password2) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ask the user to enter the first password
  const password1 = prompt("Enter your password:");
  
  // Ask the user to enter the second password for confirmation
  const password2 = prompt("Confirm your password:");
  
  // Validate the passwords
  if (validatePasswords(password1, password2)) {
    console.log("Passwords match. Passwords are validated.");
  } else {
    console.log("Passwords do not match. Please try again.");
  }
  
// Ask the user to enter a password
const userPasswrd = prompt("Please enter your password:");

// Check if the user has entered a password
if (userPasswrd === null || userPasswrd.trim() === "") {
  console.log("Please enter your password.");
} else {
  console.log("Password entered successfully.");
}

// Define the original password
const originalPassword = "your_password_here"; // Replace with the actual password

// Ask the user to enter the first password
const passWord1 = prompt("Enter your password:");

// Ask the user to enter the second password for confirmation
const passWord2 = prompt("Confirm your password:");

// Check if both passwords are the same
if (passWord1 === passWord2 && passWord1 === originalPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password. Passwords do not match or are not the same as the original password.");
}

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Prompt the user to enter the time in 24-hour format
const inputTime = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

// Check if the input is a valid time (between 0 and 2359)
if (!isNaN(inputTime) && inputTime >= 0 && inputTime <= 2359) {
  let hour = Math.floor(inputTime / 100); // Extract the hour part
  let minute = inputTime % 100; // Extract the minute part
  let period; // AM or PM

  // Determine the period (AM or PM)
  if (hour >= 12) {
    period = "PM";
    if (hour > 12) {
      hour -= 12; // Convert to 12-hour format
    }
  } else {
    period = "AM";
    if (hour === 0) {
      hour = 12; // Midnight (12:00 AM)
    }
  }

  // Display the converted time in 12-hour format
  console.log(`The time in 12-hour format is: ${hour}:${minute.toString().padStart(2, '0')} ${period}`);
} else {
  console.log("Invalid input. Please enter a valid time in 24-hour format.");
}
