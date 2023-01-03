let player = {
    name: "Balance",
    chips: 2000
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let bg = document.getElementById("bg")

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1 && sum < 11) {
        return 11
    }else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    if (firstCard === 1 && secondCard < 11) {
        firstCard = 11
    }
    if (firstCard < 11 && secondCard === 1) {
        secondCard = 11
    }
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    player.chips -= 50
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
        player.chips += 200
    } else {
        message = "You lost!"
        isAlive = false
        player.chips -= 100
    }
    if (player.chips < 0) {
        document.querySelector('#bg').setAttribute('class','red')
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
}


function newCard() {
    if (isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
