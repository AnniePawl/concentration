// On click  --> reveal card and determine if match found
let cardClicked = false;

function handleClick(e) {
  e.target.removeAttribute("data-hidden"); // reveal card
  const clickedCard = e.target;
  console.log(e.detail);
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
      console.log("Match!");
    } else {
      setTimeout(() => {
        clickedCard.setAttribute("data-hidden", true);
        firstCard.setAttribute("data-hidden", true);
      }, 500);

      console.log("Not a Match");
    }
  }
}
