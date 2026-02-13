// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let data = [];
for (let price of amdPrices) {
    data.push(price);
    data.sort((a, b) => a - b);    
}
	
console.log('The three lowest prices are ' + data[0] + ', ' + data[1] + ' and ' + data[2]);