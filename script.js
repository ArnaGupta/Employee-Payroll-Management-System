// ---------- Part C: variables and functions ----------

// const: these values are fixed and never change
const maths = 80;
const physics = 70;
const programming = 90;
const maxTotal = 300;

// let: this value starts at 0 and changes later
let total = 0;

// Normal function: returns the sum of three marks
function calculateTotal(m1, m2, m3) {
    return m1 + m2 + m3;
}

// Arrow function: returns the percentage
const calculatePercentage = (total, maxMarks) => (total / maxMarks) * 100;

// Call the functions and store the results
total = calculateTotal(maths, physics, programming);
const percentage = calculatePercentage(total, maxTotal);

// ---------- Part D: DOM ----------

// 1. Change the total paragraph (getElementById)
const totalPara = document.getElementById("total");
totalPara.textContent = "Total: " + total;

// 2. Change the percent paragraph (getElementById)
const percentPara = document.getElementById("percent");
percentPara.textContent = "Percentage: " + percentage + "%";

// 3. All subject items (getElementsByClassName)
const subjects = document.getElementsByClassName("subject");
console.log("Subjects found: " + subjects.length);
console.log("Third subject: " + subjects[2].textContent);

// 4. All p tags (getElementsByTagName)
const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs found: " + paragraphs.length);

// 5. First .info paragraph (querySelector)
const firstInfo = document.querySelector(".info");
console.log("First info: " + firstInfo.textContent);

// 6. Make the percentage green (querySelector)
document.querySelector("#percent").style.color = "green";

// ---------- Bonus: 5 grace marks in Physics ----------

const addGrace = (marks, grace) => marks + grace;

const newPhysics = addGrace(physics, 5);
const newTotal = calculateTotal(maths, newPhysics, programming);
const newPercentage = calculatePercentage(newTotal, maxTotal);

// Update the page with the new values
// (comment these three lines out if you want the page to show 240 and 80%)
totalPara.textContent = "Total: " + newTotal;
percentPara.textContent = "Percentage: " + newPercentage.toFixed(2) + "%";
console.log("After grace -> Total: " + newTotal + ", Percentage: " + newPercentage.toFixed(2) + "%");

// ---------- Part E: Understanding ----------

// 1. The document is the object that represents the whole web page in the DOM; it is the starting point from which JavaScript finds and changes every element.
// 2. An id is unique, so getElementById returns exactly one element; a class can be used by many elements, so getElementsByClassName returns a list (collection) and we need a position number like [2] to pick one item from it.