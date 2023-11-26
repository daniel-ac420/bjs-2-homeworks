"use strict"

/* --- Решение квадратных уравнений --- */
function solveEquation(a, b, c) {
	let result = [];
	
	let discriminant = b ** 2 - 4 * a * c;
	
	if (discriminant < 0) {
		result = [];
	} else if (discriminant === 0) {
		result = [-b / (2 * a)];
    } else {
		result = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
	}

	return result;
}



/* --- Калькулятор расчёта выплат по ипотеке --- */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent /= 100 * 12;
	let mainPayment = amount - contribution;
	let monthPayment = mainPayment * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let totalPayment = Number((monthPayment * countMonths).toFixed(2));
	
	return totalPayment;
}