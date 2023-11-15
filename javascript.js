// Define an array of numbers
var numbers = [10, 20, 30, 40, 50];

// Calculate the sum of the numbers
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Calculate the average
var average = sum / numbers.length;

// Log the average to the console
console.log("The average is: " + average);
