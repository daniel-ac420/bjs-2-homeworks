/* --- #1 --- */

function parseCount(value) {
	if (Number.isNaN(Number.parseFloat(value))) {
		throw new Error("Невалидное значение");
	} else {
		return Number.parseFloat(value);	
	}
}


function validateCount(value) {
	try {
		return parseCount(value);
	} catch(error) {
//		console.error(error);
		return error;
	} 
//	finally {
//		return parseCount(value);
//	}
}



/* --- #2 --- */

//class Triangle {
//	constructor(sideA, sideB, sideC) {
//		this.sideA = sideA;
//		this.sideB = sideB;
//		this.sideC = sideC;
//		
//		if (sideA + sideB <= sideC || 
//		   sideA + sideC <= sideB ||
//		   sideB + sideC <= sideA) {
//			throw new Error("Треугольник с такими сторонами не существует");
//		}
//		
//		this.perimeter = sideA + sideB + sideC;
//		this.area = Number(Math.sqrt(this.perimeter * (this.perimeter / 2 - sideA) * (this.perimeter / 2 - sideB) * (this.perimeter / 2 - sideC) / 2).toFixed(3));
//	}
//	
////	set perimeter(perimeterValue) {
////		this._perimeter = perimeterValue;
////	}
//	
//	set perimeter(perimeterValue) {
//		if (perimeterValue !== this.perimeter) {
//			this._perimeter = this.perimeter;	
//		} else {
//			this._perimeter = perimeterValue;
//		}	
//	}
//	
//	get perimeter() {
//		return this._perimeter;
//	}
//	
//	set area(areaValue) {
//		this._area = areaValue;
//	}
//
//	get area() {
//		return this._area;
//	}
//}
//
//
//function getTriangle(sideA, sideB, sideC) {
//	try {
//		return new Triangle(sideA, sideB, sideC);
//	} catch(error) {
//		return "Ошибка! Треугольник не существует";
//	}
//}



class Triangle {
	constructor(sideA, sideB, sideC) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
		
		if (sideA + sideB <= sideC || 
		    sideA + sideC <= sideB ||
		    sideB + sideC <= sideA) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	
	get perimeter() {
		try {
			return this.sideA + this.sideB + this.sideC;
		} catch {
			return "Ошибка! Треугольник не существует";
		}
	}
	
	get area() {
		try {
			return Number(Math.sqrt(this.perimeter * (this.perimeter / 2 - this.sideA) * (this.perimeter / 2 - this.sideB) * (this.perimeter / 2 - this.sideC) / 2).toFixed(3));
		} catch {
			return "Ошибка! Треугольник не существует";
		}
	}
}


function getTriangle(sideA, sideB, sideC) {
	try {
		return new Triangle(sideA, sideB, sideC);
	} catch {
		return new Triangle(sideA, sideB, sideC);
	}
}