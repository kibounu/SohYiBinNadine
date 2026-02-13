const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let highest = amdPrices[0]; // initi first element in array

for (let i = 1; i < amdPrices.length; i++) {
    if (amdPrices[i] > highest) {
        highest = amdPrices[i];
    }
}

console.log("AMD 52-week high is " + highest);

// googled "find the highest value in array js"