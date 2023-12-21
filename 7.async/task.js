class AlarmClock {
	/* --- Выделение памяти для объекта --- */
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	
	
	/* --- Добавление нового звонка в коллекцию существующих --- */
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		
		if (
			this.alarmCollection.find(function(element) {
				element === time;
			})
		) {
			console.warn("Уже присутствует звонок на это же время");
		}
		
		this.alarmCollection.push(
			{
				callback,
				time,
				canCall: true
			}
		);
	}
	
	
	/* --- Удаление звонка по определённому времени --- */
	removeClock(time) {
		let resultArray = this.alarmCollection.filter(function(element) {
			if (element !== time) {
				return true;
			}
		})
		
		return resultArray;
	}
	
	
	/* --- Возвращение текущего времени в формате HH:MM --- */
	getCurrentFormattedTime() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		
		if (hours < 10) {
			hours = "0" + hours;	
		}
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		return `${hours}:${minutes}`;
	}
	
	
	/* --- Запуск будильника --- */
	start() {
		if (this.intervalId !== null) {
			return;
		}
		
		this.intervalId = setInterval(timer, 1000);
		
		function timer() {
			this.alarmCollection.forEach(function(element) {
				if (element.time === getCurrentFormattedTime() && element.canCall) {
					element.canCall = false;
					//return callback;
					element.callback();
				}
			})
		}
	}
	
	
	/* --- Остановка выполнения интервала будильника --- */
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	
	
	/* --- Удаление всех звонков --- */
	clearAlarms() {
		stop();
		this.alarmCollection = [];		
	}
}