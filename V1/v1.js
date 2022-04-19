let cardClicked = false;
let combosFound = 0;

window.onload = function () {
  shuffleCards();
};

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

// Shuffle cards on reset
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

// On click  --> reveal card and determine if match found
function handleClick(e) {
  e.target.removeAttribute("data-hidden"); // reveal card
  const clickedCard = e.target;
  if (!cardClicked) {
    // if first card clicked, keep track of card number
    firstCard = clickedCard;
    console.log("first card:", firstCard.getAttribute("data-cardNumber"));
    cardClicked = true;
  } else if (cardClicked) {
    // if second card clicked, check for match
    console.log("second card:", clickedCard.getAttribute("data-cardNumber"));
    cardClicked = false;
    if (
      firstCard.getAttribute("data-cardNumber") ===
      clickedCard.getAttribute("data-cardNumber")
    ) {
      combosFound++;
      if (combosFound === 8) {
        alert("You Win!");
      }
      console.log("Match!");
    } else {
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
}
