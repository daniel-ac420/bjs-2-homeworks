/* --- Задача 1 --- */

function getArrayParams(...arguments) {
//	console.log(arguments);
	
	let totalSum = arguments.reduce(function(sum, element) {
		return sum + element;
	}, 0);
//	console.log(`totalSum is ${totalSum}`);
	
	let avg = Number((totalSum / arguments.length).toFixed(2));
//	console.log(`avg is ${avg}`);
	
	let max = Math.max(...arguments);
//	console.log(`max is ${max}`);
	
	let min = Math.min(...arguments);
//	console.log(`min is ${min}`);
	
	return {min: min, max: max, avg: avg};
}



/* --- Задача 2 --- */

function summElementsWorker(...arguments) {
	if (arguments.length === 0) {
		return 0;
	} else {
		let totalSum = arguments.reduce(function(sum, element) {
			return sum + element;
		}, 0);
		
		return totalSum;
		console.log(totalSum);
	}
}

function differenceMaxMinWorker(...arguments) {
	if (arguments.length === 0) {
		return 0;
	} else {
		let max = Math.max(...arguments);
//		console.log(`max is ${max}`);

		let min = Math.min(...arguments);
//		console.log(`min is ${min}`);
		
		return Math.abs(max - min);
	}
}

function differenceEvenOddWorker(...arguments) {
	if (arguments.length === 0) {
		return 0;
	} else {
		let sumEvenElement = arguments.reduce(function(sum, element) {
			if (element % 2 === 0) {
				return sum + element;
			} else {
				return sum;
			}
		}, 0);
		
		let sumOddElement = arguments.reduce(function(sum, element) {
			if (element % 2 !== 0) {
				return sum + element;
			} else {
				return sum;
			}
		}, 0);
		
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arguments) {
	if (arguments.length === 0) {
		return 0;
	} else {
		let countEvenElement = 0;
		
		let sumEvenElement = arguments.reduce(function(sum, element) {
			if (element % 2 === 0) {
				countEvenElement++;
				return sum + element;
			} else {
				return sum;
			}
		}, 0);

		return Number((sumEvenElement / countEvenElement).toFixed(2));
	}
}



/* --- Задача 3 --- */

function makeWork (arrOfArr, func) {
	let resultArray = [];
	
	for (let array of arrOfArr) {
		resultArray.push(func(...array));
	}
	
//	console.log(resultArray);
	
	let max = Math.max(...resultArray);
//	console.log(max);
	return max;
}