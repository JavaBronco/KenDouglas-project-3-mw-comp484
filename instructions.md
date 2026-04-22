# Project 3: The Status Manager

**Course:** COMP 484  
**Total Points:** 100  
**Submission Format:** GitHub Repository Link including GitHub Pages link.

## Objective

In this assignment, you will apply your knowledge of the **Document Object Model (DOM)** and **Browser Object Model (BOM)**. You are provided with starter HTML and CSS files. Your goal is to write the JavaScript necessary to make the page interactive, manipulating DOM elements, handling user events, and implementing timing functions.

## Prerequisites

1.  Download the provided starter files: `index.html`, `style.css`, and `script.js`.
2.  Open these files in your preferred code editor (e.g., VS Code).
3.  Open `index.html` in your browser to test your changes as you work.

---

## Instructions

Complete the following 10 mini-tasks. Each task builds upon the previous one.

### Part 1: Setup and Inspection (20 Points)

**Task 1: Verification**

- **Goal:** Ensure your script is loading correctly.
- **Action:** Open `script.js`. At the top of the file, add a `console.log("Status Manager Started");` statement. Open your browser's Developer Console (F12) to verify the message appears.
- _Reference:_ The browser window object and console interactions [1].

**Task 2: Selector Analysis**

- **Goal:** Understand how CSS classes are used to hide elements.
- **Action:** Open `style.css` and locate the `.hidden` class. Confirm it uses `display: none` to hide elements [2]. Note that the HTML element with `id="status-output"` currently has this class applied.

### Part 2: Basic DOM Manipulation (20 Points)

**Task 3: Modify Content on Load**

- **Goal:** Change text dynamically when the page loads.
- **Action:** In `script.js`, select the `<h1>` element with the ID `main-title`. Update its **`innerHTML`** property to read: **"DOM Project: Ready!"**.
- _Reference:_ Accessing and changing elements using `innerHTML` [3].

**Task 4: Manipulate Attributes**

- **Goal:** Add custom attributes to existing elements.
- **Action:** Select the anchor tag with the ID `toggle-button`. Use the **`setAttribute()`** method to add an attribute named `data-action` with the value `"status-toggle"`.
- _Reference:_ `setAttribute` takes an attribute name and value arguments [4].

### Part 3: Events and Classes (30 Points)

**Task 5: The Toggle Function**

- **Goal:** Create an interactive function to show/hide content.
- **Action:**
  1.  Create a function named `toggleStatus` that accepts an event object `e`.
  2.  Inside the function, select the `div` with ID `status-output`.
  3.  Use **`classList.toggle()`** to add or remove the class `.hidden`.
  4.  Add an **event listener** to the `toggle-button` that runs `toggleStatus` on a **`click`** event.
- _Reference:_ Using `classList.toggle` [2] and `addEventListener` [5].

**Task 6: Prevent Default Behavior**

- **Goal:** Stop the anchor link from refreshing or jumping the page.
- **Action:** Inside your `toggleStatus` function, call **`e.preventDefault()`** on the event object.
- _Reference:_ preventing default behavior of the event object [6].

**Task 7: Inline Styles**

- **Goal:** Apply direct CSS styling via JavaScript.
- **Action:** Update `toggleStatus` to check if the status `div` is visible (i.e., does _not_ have the `.hidden` class).
  - If visible: Set the `main-title` element's **`style.backgroundColor`** to `"yellow"`.
  - If hidden: Reset the background color to an empty string `""`.
- _Reference:_ Accessing `style` properties and using camelCase for hyphenated CSS properties [7, 8].

### Part 4: Advanced DOM and Timing (30 Points)

**Task 8: Dynamic Element Creation**

- **Goal:** Add new content to the DOM programmatically.
- **Action:** Create a helper function `createTimestamp()`. Call this function inside `toggleStatus` whenever the status becomes visible. The function must:
  1.  Use **`document.createElement("span")`** to create a new span.
  2.  Set its inner HTML to the current time (e.g., `new Date().toLocaleTimeString()`).
  3.  Use **`appendChild()`** to add the span _inside_ the `status-output` div.
- _Reference:_ `createElement` and `appendChild` methods [9].

**Task 9: Loops and Node Lists**

- **Goal:** Iterate over multiple elements to apply changes.
- **Action:** Write a function `highlightListItems()` that runs once on page load.
  1.  Use **`document.querySelectorAll('li')`** to select all list items in the `item-list`.
  2.  Use a **`for` loop** or `forEach` to iterate through the list.
  3.  Set the inline style `color` of each item to `"blue"`.
- _Reference:_ `querySelectorAll` returns a node list [10]; Loops [11].

**Task 10: The Flashing Timer**

- **Goal:** Implement asynchronous timing functions.
- **Action:**
  1.  Create a function `startFlashing()` that uses **`setInterval`** to toggle the `.hidden` class on the `control-panel` every **500ms**. Store the ID returned by `setInterval` in a global variable.
  2.  Create a function `stopFlashing()` that uses **`clearInterval()`** to stop the animation.
  3.  Bind `startFlashing` to the `timer-button` **click** event.
  4.  Bind `stopFlashing` to the `timer-button` **dblclick** (double click) event.
- _Reference:_ `setInterval` returns an "interval ID" [12]; `clearInterval` stops the execution [13].

---

## Grading Rubric

| Task      | Requirement                                                        | Points  |
| :-------- | :----------------------------------------------------------------- | :------ |
| **1-2**   | Console log appears; `.hidden` class exists in CSS.                | 20      |
| **3**     | Title text changes to "DOM Project: Ready!" on load.               | 10      |
| **4**     | Toggle button has `data-action="status-toggle"` attribute.         | 10      |
| **5**     | Clicking button toggles visibility of the status div.              | 10      |
| **6**     | Page does not jump/reload on click (`preventDefault`).             | 10      |
| **7**     | Title background turns yellow when status is visible.              | 10      |
| **8**     | A new timestamp is appended to the status div on every show event. | 10      |
| **9**     | All list items are blue on page load.                              | 10      |
| **10**    | "Start Timer" flashes the panel; Double-click stops it.            | 10      |
| **Total** |                                                                    | **100** |
