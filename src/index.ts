class Deight {
	date: any
	
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


	get monthShort() {
		const months: string[] = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sept',
			'Oct',
			'Nov',
			'Dec'
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


	get hours() {
		return this.date.getHours()
	}


	get minutes() {
		return this.date.getMinutes()
	}


	get seconds() {
		return this.date.getSeconds()
	}


	/**
	 * This method creates a formatted date & time string.
	 * @param {string} input any string using key letters.
	 * @returns {string} formatted date & time string.
	 */
	format(mask?: string): string {
		let formatted: string = ''
		// if mask was not passed in
		if (!mask || mask === '') {
			// set mask to default format
			mask = 'M d, Y'
		}
		// loop through each character in mask
		for (let index = 0; index < mask.length; index++) {
			let char = mask[index]
			// if that character is a letter
			if (char.match(/[a-zA-Z]/)) {
				// pass it into a switch to return the appropriate data
				switch(char) {
					case 'y':
						formatted += String(this.year).slice(-2)
						break
					case 'Y':
						formatted += this.year
						break
					case 'm':
						formatted += this.monthShort
						break
					case 'M':
						formatted += this.month
						break
					case 'd':
						formatted += this.day
						break
					case 'D':
						if (String(this.day).length === 1) {
							formatted = `${formatted}0${this.day}`
							break
						}
						formatted += this.day
						break
					case 'h':
						formatted += this.hours
						break
					case 'H':
						if (String(this.hours).length === 1) {
							formatted = `${formatted}0${this.hours}`
							break
						}
						formatted += this.hours
						break
					case 'i':
						formatted += this.minutes
						break
					case 'I':
						if (String(this.minutes).length === 1) {
							formatted = `${formatted}0${this.minutes}`
							break
						}
						formatted += this.minutes
						break
					case 's':
						formatted += this.seconds
						break
					case 'S':
						if (String(this.seconds).length === 1) {
							formatted = `${formatted}0${this.seconds}`
							break
						}
						formatted += this.seconds
						break
				}
			} else {
				// otherwise append the character to formatted
				formatted += char
			}
		}
		return formatted
	}


	/**
	 * This method creates a timestamp for how long ago the Deight was.
	 * @returns {string} timestamp
	 */
	when(today?: any): string {
		if (!today) {
			today = new Date()
		} else {
			today = new Date(today)
		}
		if (today > this.date) {
			let numberOfDays: number = Math.ceil((today - this.date) / 8.64e7)
			if (numberOfDays > 31) {
				let numberOfMonths: number = numberOfDays / 30
				if (numberOfMonths > 12) {
					let numberOfYears: number = numberOfMonths / 12
					return `${numberOfYears.toFixed(0)} years ago`
				}
				return `${numberOfMonths.toFixed(0)} months ago`
			}
			return `${numberOfDays.toFixed(0)} days ago`
		} else {
			let numberOfDays: number = Math.ceil((this.date - today) / 8.64e7)
			if (numberOfDays > 31) {
				let numberOfMonths: number = numberOfDays / 30
				if (numberOfMonths > 12) {
					let numberOfYears: number = numberOfMonths / 12
					return `${numberOfYears.toFixed(0)} years from now`
				}
				return `${numberOfMonths.toFixed(0)} months from now`
			}
			return `${numberOfDays.toFixed(0)} days from now`
		}
	}
}

module.exports = Deight
