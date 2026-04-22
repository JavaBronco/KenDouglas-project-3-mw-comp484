// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");
const summonButton = document.getElementById("summon-button");
const resetButton = document.getElementById("reset-button");
const battlefieldZone = document.getElementById("battlefield-zone");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
function highlightListItems() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(function (item) {
    item.style.color = "blue";
  });
}
highlightListItems();

/* ======================================= */
// --- Task 8: Dynamic Element Creation ---
// icon: HTML entity string, label: event description, type: CSS class suffix
function createTimestamp(icon, label, type) {
  const span = document.createElement("span");
  span.className = "event-" + type;
  span.innerHTML = icon + " " + new Date().toLocaleTimeString() + " — " + label;
  statusOutput.appendChild(span);
}

// Ensures status-output is visible and title is highlighted
function revealStatus() {
  if (statusOutput.classList.contains("hidden")) {
    statusOutput.classList.remove("hidden");
    mainTitle.style.backgroundColor = "yellow";
  }
}

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
function toggleStatus(e) {
  // Task 6: prevent the anchor from jumping or reloading the page
  e.preventDefault();

  // Task 5: toggle the .hidden class on the status output div
  statusOutput.classList.toggle("hidden");

  // Task 7: change the title background based on visibility
  if (!statusOutput.classList.contains("hidden")) {
    mainTitle.style.backgroundColor = "yellow";
    // Task 8: append a distinct timestamp each time the battlefield is revealed
    createTimestamp("&#9876;", "Battlefield revealed", "reveal");
  } else {
    mainTitle.style.backgroundColor = "";
  }
}

toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
function startFlashing() {
  if (intervalId !== null) return; // prevent stacking multiple intervals
  revealStatus();
  createTimestamp("&#9889;", "Mana Surge channeled", "surge");
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  clearInterval(intervalId);
  intervalId = null; // reset so startFlashing can run again
  controlPanel.classList.remove("hidden");
  revealStatus();
  createTimestamp("&#9632;", "Mana Surge dissipated", "stop");
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);

/* ======================================= */
// --- Summon and Reset ---
function summonPermanent() {
  const listItems = document.querySelectorAll("#item-list li");
  const chosen = listItems[Math.floor(Math.random() * listItems.length)];

  const card = document.createElement("div");
  card.className = "permanent-card";
  card.innerHTML = chosen.innerHTML + " <em>— entered the battlefield</em>";
  battlefieldZone.appendChild(card);

  revealStatus();
  createTimestamp("&#9651;", chosen.textContent.trim() + " entered the battlefield", "summon");
}

function resetBattlefield() {
  battlefieldZone.innerHTML = "";
  createTimestamp("&#8635;", "Battlefield reset", "stop");
}

summonButton.addEventListener("click", summonPermanent);
resetButton.addEventListener("click", resetBattlefield);
