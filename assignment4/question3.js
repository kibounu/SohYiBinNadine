const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sum = 0;

for (let i = 0; i < amdPrices.length; i++) {
    sum = sum + amdPrices[i];
};

const average = sum / 7;

let above = amdPrices[0];
let count = 0;

for (let i = 1; i < amdPrices.length; i++) {
    if (amdPrices[i] > above) {
        count++;
    }
    console.log(count);
}

console.log('Number of days AMD was above the 7-day SMA is: ' + count);