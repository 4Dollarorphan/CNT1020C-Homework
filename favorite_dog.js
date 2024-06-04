// Object literal for the character Astro
let myDog = {
    name: "Courage",
    show: "Courage the Cowardly Dog",
    breed: "Beagle",
    mySound: "I am not scary when I bark.",

    // Method to display a greeting message
    myGreeting: function() {
        return `Hello, my name is ${this.name}. I starred in the TV show ${this.show}. My character was a ${this.breed}. ${this.mySound}`;
    }
};

// Displaying the dog's greeting on the webpage
document.getElementById('dogMessage').innerText = myDog.myGreeting();

// Constructor function for creating dog objects
function Dog(name, show, breed, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display a greeting message
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}. I starred in the TV show ${this.show}. My character was a ${this.breed}. ${this.mySound} Can I talk? ${this.canTalk}`;
    };
}

// Creating the myDogConst object using the constructor
let myDogConst = new Dog("Courage", "Courage the Cowardly Dog", "Beagle", "I am not scary when I bark.", true);

// Displaying the dog's greeting on the webpage
document.getElementById('dogMessageConst').innerText = myDogConst.myGreeting();