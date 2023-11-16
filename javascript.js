let userInput = prompt("What flavors of ice cream would you like? please seperate it with commas.");
let flavors = userInput.split(",");

const ScoopCount = {};

flavors.forEach(function(flavor) {
    ScoopCount[flavor] = (ScoopCount[flavor] || 0) + 1;
});

console.log("Froyo Order Summary:");
console.log(ScoopCount);