// Shuffle cards on reload
window.onload = function () {
  shuffleCards();
};

let cardClicked = false;
let combosFound = 0;
let numGuesses = 0;

const cardNumbers = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
];

// Shuffle cards on reload and reset
function shuffleCards() {
  const cards = [...document.querySelectorAll(".card")];
  for (let cardNum of cardNumbers) {
    // first random card
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.setAttribute("data-cardNumber", cardNum);
    cardA.setAttribute("data-hidden", "true");

    // second random card
    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.setAttribute("data-cardNumber", cardNum);
    cardB.setAttribute("data-hidden", "true");
  }
}

// When card clicked...
function handleClick(e) {
  // reveal card
  const clickedCard = e.target;
  e.target.removeAttribute("data-hidden");
  // if first card clicked, keep track of card number
  if (!cardClicked) {
    firstCard = clickedCard;
    console.log("first card:", firstCard.getAttribute("data-cardNumber"));
    cardClicked = true;
    // if second card clicked...
  } else if (cardClicked) {
    console.log("second card:", clickedCard.getAttribute("data-cardNumber"));
    // increase number of guesses and update span
    numGuesses++;
    document.getElementById("numGuesses").innerHTML = numGuesses;

    cardClicked = false;
    // check for match
    if (
      firstCard.getAttribute("data-cardNumber") ===
      clickedCard.getAttribute("data-cardNumber")
    ) {
      combosFound++;
      // game over alert
      if (combosFound === 8) {
        alert("You Win!");
      }
      console.log("Match!");
    } else {
      // flip cards back if no match
      setTimeout(() => {
        clickedCard.setAttribute("data-hidden", true);
        firstCard.setAttribute("data-hidden", true);
      }, 300);
      console.log("Not a Match");
    }
  }
}

// Reset Button
function handleReset() {
  console.log("reset clicked");
  shuffleCards();
  // increase number of guesses and update span
  numGuesses = 0;
  document.getElementById("numGuesses").innerHTML = numGuesses;
}
