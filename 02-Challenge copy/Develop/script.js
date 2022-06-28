// Assignment Code
var generateBtn = document.querySelector("#generate");
// var count = 0;

// Write password to the #password input
function writePassword() {
  var passLength = prompt('Please choose a lenght between 8 and 128');
  var wantsLowercase = confirm('Press OK if you would like uppercase letters');
  var wantsUppercase = confirm('Press OK if you would like lowercase letters');
  var wantsNumbers = confirm('Press OK if you would like numbers');
  var wantsSpecialChar = confirm('Press OK if you would like special characters');
  var specialChar = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '1234567890'
  var passwordResult = '';
  var passwordEl = document.querySelector('#password');
    if(passLength < 7) { length;
    }if(wantsLowercase === true) {  
      passwordResult += lowercase;
  } if(wantsUppercase === true) { 
      passwordResult += uppercase;
  } if(wantsNumbers === true) { 
      passwordResult += numbers;

  } if(wantsSpecialChar === true) { 
      passwordResult += specialChar;

  }
  
  
   for(var count = 0; count < 5; count++){
      passwordResult += specialChar[Math.floor(Math.random() * (30 - 0) + 0)];
      passwordResult += lowercase [Math.floor(Math.random() * (25 - 0) + 0)];
      passwordResult += uppercase [Math.floor(Math.random() * (25 - 0) + 1)];
      passwordResult += numbers [Math.floor(Math.random() * (9 - 1) + 0)];

   }
   
  


  passwordEl.innerText = passwordResult;
  
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
