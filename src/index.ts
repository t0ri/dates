class Deight {
	date: Date
	
	constructor(...args: any) {
		this.date = new Date(args)
	}

	get year() {
		return this.date.getFullYear()
	}

	get month() {
		const months: string[] = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
		return months[this.date.getMonth()]
	}

	get weekday() {
		const days: string[] = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]
		return days[this.date.getDay()]
	}

	get day() {
		return this.date.getDate()
	}
}

// const date = new Deight('2/19/98')
// date.year
module.exports = Deight