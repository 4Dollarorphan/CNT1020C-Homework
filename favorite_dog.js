// Constructor function for creating dog objects
function Dog(name, show, breed, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display a greeting message
    this.myGreeting = function() {
        let talkMessage = this.canTalk ? "I can talk!" : "I cannot talk.";
        return `Hello, my name is ${this.name}. I starred in the TV show ${this.show}. My character was a ${this.breed}. ${this.mySound} ${talkMessage}`;
    };
}

// Creating multiple dog objects using the constructor
let dogs = [
    new Dog("Astro", "The Jetsons", "Great Dane", "I am not scary when I bark.", true),
    new Dog("Brian", "Family Guy", "Labrador Retriever", "I am sarcastic and talkative.", true),
    new Dog("Scooby-Doo", "Scooby-Doo, Where Are You!", "Great Dane", "I am always scared but love Scooby snacks!", true)
];

// Displaying each property and value in the object appropriately labeled
let dogListDiv = document.getElementById('dogList');
dogs.forEach(dog => {
    let dogInfo = "<p>";
    for (let property in dog) {
        if (typeof dog[property] !== 'function') {
            dogInfo += `<strong>${property}:</strong> ${dog[property]}<br>`;
        }
    }
    dogInfo += "</p>";
    dogListDiv.innerHTML += dogInfo;
});

// Function to display the selected dog information
function selectDog() {
    let selectedName = document.getElementById('dogName').value;
    let messageDiv = document.getElementById('message');
    let selectedDogDiv = document.getElementById('selectedDog');
    let foundDog = false;

    dogs.forEach(dog => {
        if (dog.name.toLowerCase() === selectedName.toLowerCase()) {
            foundDog = true;
            selectedDogDiv.innerHTML = dog.myGreeting();
        }
    });

    if (!foundDog) {
        messageDiv.innerText = "The dog you selected doesn't exist.";
    } else {
        messageDiv.innerText = "";
    }
}
