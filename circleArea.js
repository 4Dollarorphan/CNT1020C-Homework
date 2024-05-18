// circleArea.js

// Function to prompt the user for their first name and display a welcome message
function getUserName() {
    let Fname = prompt("Please enter your first name:");
    alert("Welcome, " + Fname + "!");
    return Fname;
}

// Create a constant to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Function to prompt the user for their favorite number and calculate the area of a circle
function calculateCircleArea() {
    let myFavNum = prompt("Please enter your favorite number:");
    let myArea = piValue * myFavNum * myFavNum; // A = πr²
    return {
        myFavNum: myFavNum,
        myArea: myArea
    };
}

// Function to display the results on the webpage
function displayResults(Fname, myFavNum, myArea) {
    let message = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. ` +
                  `If that was the radius of a circle, the circle’s area would be ${myArea.toFixed(7)}.`;
    document.body.innerHTML = "<p>" + message + "</p>";
}

// Main function to execute the program
function main() {
    let Fname = getUserName();
    let results = calculateCircleArea();
    displayResults(Fname, results.myFavNum, results.myArea);
}

// Execute the main function when the window loads
window.onload = main;
