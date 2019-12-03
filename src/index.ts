class Deight {
	date: Date
	
	constructor(...args: any) {
		this.date = new Date(args)
	}

	get year() {
		return this.date.getFullYear()
	}
}

// const date = new Deight('2/19/98')
// date.year
module.exports = Deight