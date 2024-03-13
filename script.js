const cards = [
  {
    title: "1",
    info: "Move forward 1",
  },
  {
    title: "2",
    info: "Move forward 2",
  },
  {
    title: "3",
    info: "Move forward 3",
  },
  {
    title: "4",
    info: "Move backward 4",
  },
  {
    title: "5",
    info: "Move forward 5",
  },
  {
    title: "7",
    info: "Move forward 7 or split between two pawns",
  },
  {
    title: "8",
    info: "Move forward 8",
  },
  {
    title: "10",
    info: "Move forward 10 or backwards 1",
  },
  {
    title: "11",
    info: "Move forward 11 or switch places with an opponent's pawn",
  },
  {
    title: "12",
    info: "Move forward 12",
  },
  {
    title: "Sorry",
    info: "Bump your opponent back to start or move forward 4",
  },
];

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  const cardTitle = document.getElementById("card-title");
  const cardInfo = document.getElementById("card-info");
  const drawButton = document.getElementById("draw-button");

  const transitionDuration = window
    .getComputedStyle(cardTitle)
    .getPropertyValue("transition-duration");
  const timeoutDelay = parseFloat(transitionDuration) * 1000; // Convert to milliseconds

  drawButton.addEventListener("click", (e) => {
    if (cardTitle.classList.contains("active")) return;

    cardTitle.classList.add("active");
    cardInfo.classList.add("active");
    console.log("Fade out");

    setTimeout(() => {
      const result = randomChoice(cards);
      cardTitle.innerText = result.title;
      cardInfo.innerText = result.info;
      cardTitle.classList.remove("active"); // Ensure active class
      cardInfo.classList.remove("active"); // Ensure active class
      console.log("Fade in");
    }, timeoutDelay);
  });
});
