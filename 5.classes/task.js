/* --- #1 --- */

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	
	fix() {
		this.state *= 1.5;
	}
	
	set state(currentState) {
		if (currentState < 0) {
			this.state = 0;
		} else if (currentState > 100) {
			this.state = 100;
		} else {
			this._state = currentState;
		}
	}
	
	get state() {
		return this._state;
	}
}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state);
		this.type = "magazine";
	}
}


class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state);
		this.author = author;
		this.type = "book";
	}
}


class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "novel";
	}
}


class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "fantastic";
	}
}


class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state);
		this.type = "detective";
	}
}



/* --- #2 --- */

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}
	
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	
	findBookBy(type, value) {
		for (let book of this.books) {
			if (book.hasOwnProperty(type) && book[type] === value) {
				return book;
			} else if (book.hasOwnProperty(type) && book[type] !== value) {
				continue;
			} else {
				return null;
			}
			
			return null;
		}
	}
	
	giveBookByName(bookName) {
		let indexElement;
		
		for (let [index, value] of this.books.entries()) {
			if (value.name === bookName)	{
				indexElement = index;
			} else {
				indexElement = null;
			}
		}
		
		if (indexElement !== null) {
			return this.books.splice(indexElement, 1);
		} else {
			return null;
		}
	}
}