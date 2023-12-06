/* --- #1 --- */
function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

/* --- #2 --- */
Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

/* --- #3 --- */
Student.prototype.addMarks = function (...marksToAdd) {
	if (!this.excluded) {
		this.marks = [...marksToAdd];
	}
}

/* --- #4 --- */
Student.prototype.getAverage = function () {
//	if (!this.hasOwnProperty(marks)) {
//		return average = 0;
//	} else 
	
//	if (marks in this === false) {
//		return average = 0;
//	} else 
	if (this.marks.length !== 0) {
		let sum = this.marks.reduce(function(sum, number) {
			return sum + number;
		}, 0);
		
		let average = sum / this.marks.length;
		return average;	
	} else  {
		return average = 0;
	}
}

/* --- #5 --- */
Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}


let student = new Student("Василиса", "женский", 19);
student.exclude('прогулы');

student.addMarks(5, 5, 5);
console.log(student);

student.addMarks(3, 2, 5);
console.log(student);

//student.getAverage();
console.log(student);

//console.log(student.hasOwnProperty(name));
//console.log(student.hasOwnProperty(age));
//
//console.log(name in student);
//console.log(age in student);
