const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let sum = 0;

for (const item of disneyData) {
	sum += parseFloat(item.close);
};

const average = sum / disneyData.length;

console.log('Average closing price of Disney is ' + average.toFixed(2));

// I put into chatgpt "how do I sum the third key pair of an object in an array? I am learning javascript. could you explain how to extract that information?"