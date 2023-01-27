//======================                  =======================
//====================== GLOBAL VARIABLES =======================
//====================== ---------------- =======================
const LETTERS_GE = [];
const LETTERS_EN_UPPER = [];
const LETTERS_EN_LOWER = [];
let gameStartStatus = false;
//populating constants
for (let i = 4304; i < 4336; i++) {
  LETTERS_GE.push(String.fromCharCode(i));
}
for (let i = 65; i < 91; i++) {
  LETTERS_EN_UPPER.push(String.fromCharCode(i));
}
for (let i = 97; i < 123; i++) {
  LETTERS_EN_LOWER.push(String.fromCharCode(i));
}

//===============================================================

// collections
const COLLECTIONS = [
  {
    name: "CSS Selectors",
    collection: [
      "CLASS",
      "ID",
      "ELEMENT",
      "ATTRIBUTE",
      "PSEUDO-CLASS",
      "GLOBAL",
    ],
  },
  {
    name: "JS Libraries",
    collection: ["REACT", "ANGULAR", "NEXT", "VUE", "WAKANDA"],
  },
];

//===============================================================

//=======================                 =======================
//======================= GAME UI SECTION =======================
//======================= --------------- =======================

// GAME SETTINGS
let gameLanguage = LETTERS_EN_LOWER; // LANGUAGE PREFERENCES

//===============================================================

// positioning containers
let remainingWords = document.getElementById("remaining-words");

let keyboardContainer = document.querySelector("#keyboard-container");
let gameSettingsContainer = document.querySelector("#settings-ui-container");
//slots should be generated per word
let slots = document.getElementById("slots");

slots.style.left = `${
  window.innerWidth / 2 - keyboardContainer.offsetWidth / 2
}px`;

slots.style.bottom = `${10 + keyboardContainer.offsetHeight + 10}px`;

gameSettingsContainer.style.left = `${
  window.innerWidth / 2 - gameSettingsContainer.offsetWidth / 2
}px`;
keyboardContainer.style.left = `${
  window.innerWidth / 2 - keyboardContainer.offsetWidth / 2
}px`;

//populating keyboard
gameLanguage.forEach((el) => {
  let button = document.createElement("button");
  button.innerText = el;
  keyboardContainer.appendChild(button);
});
//===============================================================

// MODAL OVERLAY
let settingUI = document.getElementById("settings-ui-container");
let backdrop = document.createElement("div");
backdrop.className = "backdrop";
window.document.body.appendChild(backdrop);

//=======================                 =======================
//=======================  LOGIC SECTION  =======================
//======================= --------------- =======================

// LOGIC
let activeCollection = null;
let timerSec = 0;
let timerSecElement = document.getElementById("seconds");
let timerMin = 0;
let timerMinElement = document.getElementById("minutes");

let collectionSelector = document.getElementById("collections"); // SELECTOR LOGIC

if (COLLECTIONS && COLLECTIONS.length > 0) {
  for (let element of COLLECTIONS) {
    let option = document.createElement("option");
    option.value = element.name;
    option.innerText = element.name;
    collectionSelector.appendChild(option);
  }
}

if (gameStartStatus) {
  settingUI.style.display = "none";
  backdrop.style.display = "none";
}

let startButton = document.getElementById("start-game"); // START-BUTTON LOGIC

startButton.addEventListener("click", (e) => {
  switch (collectionSelector.value) {
    case COLLECTIONS[0].name:
      activeCollection = COLLECTIONS[0].collection;
      console.log(activeCollection);
      break;
    case COLLECTIONS[1].name:
      activeCollection = COLLECTIONS[1].collection;
      console.log(activeCollection);
      break;
  }
  if (activeCollection && activeCollection.length > 0) {
    backdrop.style.display = "none";
    gameSettingsContainer.style.display = "none";
    gameStartStatus = true;
    setInterval(() => {
      if (timerSec === 60) {
        timerMin += 1;
        timerSec = 0;
      }
      timerSec += 1;
      timerSecElement.innerText = timerSec < 10 ? `0${timerSec}` : timerSec; // To show number as 2 digit always
      timerMinElement.innerText = timerMin < 10 ? `0${timerMin}` : timerMin; // To show number as 2 digit always
      // timerSecElement.innerText = timerSec.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false,})   // Alternative to 2 digit approach
      // timerMinElement.innerText = timerMin.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false,})   // Alternative to 2 digit approach
    }, 1000);
    console.log(activeCollection);
    activeCollection.forEach((element, index, array) => {
      let charSlot = document.createElement("div");
      element
      // remainingWords.appendChild = `${index + 1}/${array.length}`;
    });
  }
});



//=======================                =======================
//=======================  MISC SECTION  =======================
//======================= -------------- =======================

// 'rain'- droplet
let hrElement;
let counter = 1;

for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  hrElement.style.animationDuration = 0.9 + Math.random() * 0.3 + "s";
  hrElement.style.animationDelay = Math.random() * 5 + "s";
  window.document.body.appendChild(hrElement);
}

// grid background
window.document.body.classList.add("grid-background");

//===============================================================
