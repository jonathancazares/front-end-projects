
let charArray = ["jack", "queen", "king"]
let suitArray = ["_diamonds.png", "_hearts.png", "_spades.png", "_clubs.png"]

let user = {
    
}

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let cardsContainer = document.getElementById("cards-container");
let hasBlackjack = false;
let isAlive = false;
let cards = []
let sum = 0

// Creates a random number between 1 and 11 
function randomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// Return an img element for each card[] element 
function cardVisuals() {
    let randomSuit = Math.floor( Math.random() * 4) 
    let randomChar = Math.floor( Math.random() * 3 )
    let img = "./images/" // Root directory
    if (cards[i] === 11) {
        img += "ace" + suitArray[randomSuit] 
    } else if (cards[i] === 10) {
        img += charArray[randomChar] + suitArray[randomSuit]
    } else {
        img += cards[i] + suitArray[randomSuit]
    }
    let element = document.createElement("img"); // Create an img tag
    element.src = img // Add src value inside img 
    cardsContainer.appendChild(element) // Appends img tag + src inside "cards-container" div
}

function startGame() {
    deleteVisuals();
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    for (i = 0; i < cards.length; i++) {
        cardVisuals(); // Add an image for each element inside cards[] array
    }
    render()
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = randomCard();
        sum += card
        cards.push(card)
        cardVisuals()
        render()
    }
}

function render() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
        hasBlackjack = true;
    } else {
        messageEl.textContent = "You're out of the game!"
        isAlive = false;
    }
}

// When starting a new game, deletes all img tags inside "cards-container" div
function deleteVisuals() {
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        img.remove();
    })
}