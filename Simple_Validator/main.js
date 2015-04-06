var input = prompt("What is your phone number (Format: xxx-xxx-xxxx)?");
alert(input.charAt(3) === '-' && input.charAt(7) === '-');
var input = prompt("What is your birth date (Format: xx/xx/xx)?");
alert(input.charAt(2) === '/' && input.charAt(5) === '/');
var input = prompt("What is your postal code (Format: xxxxx)?");
alert(input.length === 5);
var input = prompt("Are you married (Format: yes or no)?");
if(input.toUpperCase() === "YES") {
  alert("Thank you!");
} else {
  alert("Good for you!");
}
