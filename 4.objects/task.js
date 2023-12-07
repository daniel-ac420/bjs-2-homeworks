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
	if (this.marks) {
		this.marks.push(...marksToAdd);
	}
}

/* --- #4 --- */
Student.prototype.getAverage = function () {
	if ("marks" in this === false) {
		return 0;
	} else if (this.marks.length !== 0) {
		let sum = this.marks.reduce(function(sum, mark) {
			return sum + mark;
		}, 0);

		return sum / this.marks.length;	
	} else {
		return 0;
	}
}

/* --- #5 --- */
Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}