const button = document.querySelector("button");
const roundBoard = document.querySelector("#round");
const roundDetails = document.querySelector("#round-details");

const background = document.querySelector("#background");
const foreground = document.querySelector("#foreground");
const textArea = document.querySelector("textarea");

let round = 0;

const rounds = [
  {
    round: "round-1",
    details: `<span class="help">flex-direction</span>, <span class="help">justify-content</span> and <span class="help">align-items</span>`,
  },
  {
    round: "round-2",
    details: `<span class="help">flex-direction</span>`,
  },
  {
    round: "round-3",
    details: `<span class="help">flex-direction</span>`,
  },
  {
    round: "round-4",
    details: `<span class="help">justify-content</span> and <span class="help">align-items</span>`,
  },
  {
    round: "round-5",
    details: `<span class="help">justify-content</span> and <span class="help">flex-direction</span>`,
  },
  {
    round: "round-6",
    details: `<span class="help">justify-content</span> and <span class="help">align-items</span>`,
  },
  {
    round: "round-7",
    details: `<span class="help">justify-content</span> and <span class="help">align-items</span>`,
  },
  {
    round: "round-8",
    details: `<span class="help">flex-wrap</span> and <span class="help">gap</span>`,
  },
];

roundBoard.textContent = "Round : " + (round + 1) + " / " + rounds.length;

button.addEventListener("click", nextRound);

function setBackground() {
  if (round !== 0) background.classList.remove(rounds[round - 1].round);

  background.classList.add(rounds[round].round);
  roundDetails.innerHTML = rounds[round].details;
}

setBackground();

function nextRound() {
  if (round < rounds.length - 1) round += 1;
  else button.textContent = "Finished!";

  console.log(round);
  roundBoard.textContent = "Round : " + (round + 1) + " / " + rounds.length;
  setBackground();
}

function addCSS() {
  foreground.style.cssText = textArea.value.toString();
  console.log(background.style);
}
