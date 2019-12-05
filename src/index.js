var Deight = /** @class */ (function () {
    function Deight() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.date = new Date(args);
    }
    Object.defineProperty(Deight.prototype, "year", {
        get: function () {
            return this.date.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "month", {
        get: function () {
            var months = [
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
            ];
            return months[this.date.getMonth()];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "monthShort", {
        get: function () {
            var months = [
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
            ];
            return months[this.date.getMonth()];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "weekday", {
        get: function () {
            var days = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];
            return days[this.date.getDay()];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "day", {
        get: function () {
            return this.date.getDate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "hours", {
        get: function () {
            return this.date.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "minutes", {
        get: function () {
            return this.date.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Deight.prototype, "seconds", {
        get: function () {
            return this.date.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method creates a formatted date & time string.
     * @param {string} input any string using key letters.
     * @returns {string} formatted date & time string.
     */
    Deight.prototype.format = function (mask) {
        var formatted = '';
        // if mask was not passed in
        if (!mask || mask === '') {
            // set mask to default format
            mask = 'M d, Y';
        }
        // loop through each character in mask
        for (var index = 0; index < mask.length; index++) {
            var char = mask[index];
            // if that character is a letter
            if (char.match(/[a-zA-Z]/)) {
                // pass it into a switch to return the appropriate data
                switch (char) {
                    case 'y':
                        formatted += String(this.year).slice(-2);
                        break;
                    case 'Y':
                        formatted += this.year;
                        break;
                    case 'm':
                        formatted += this.monthShort;
                        break;
                    case 'M':
                        formatted += this.month;
                        break;
                    case 'd':
                        formatted += this.day;
                        break;
                    case 'D':
                        if (String(this.day).length === 1) {
                            formatted = formatted + "0" + this.day;
                            break;
                        }
                        formatted += this.day;
                        break;
                    case 'h':
                        formatted += this.hours;
                        break;
                    case 'H':
                        if (String(this.hours).length === 1) {
                            formatted = formatted + "0" + this.hours;
                            break;
                        }
                        formatted += this.hours;
                        break;
                    case 'i':
                        formatted += this.minutes;
                        break;
                    case 'I':
                        if (String(this.minutes).length === 1) {
                            formatted = formatted + "0" + this.minutes;
                            break;
                        }
                        formatted += this.minutes;
                        break;
                    case 's':
                        formatted += this.seconds;
                        break;
                    case 'S':
                        if (String(this.seconds).length === 1) {
                            formatted = formatted + "0" + this.seconds;
                            break;
                        }
                        formatted += this.seconds;
                        break;
                }
            }
            else {
                // otherwise append the character to formatted
                formatted += char;
            }
        }
        return formatted;
    };
    /**
     * This method creates a timestamp for how long ago the Deight was.
     * @returns {string} timestamp
     */
    Deight.prototype.when = function (today) {
        if (!today) {
            today = new Date();
        }
        else {
            today = new Date(today);
        }
        if (today > this.date) {
            var numberOfDays = Math.ceil((today - this.date) / 8.64e7);
            if (numberOfDays > 31) {
                var numberOfMonths = numberOfDays / 30;
                if (numberOfMonths > 12) {
                    var numberOfYears = numberOfMonths / 12;
                    return numberOfYears.toFixed(0) + " years ago";
                }
                return numberOfMonths.toFixed(0) + " months ago";
            }
            return numberOfDays.toFixed(0) + " days ago";
        }
        else {
            var numberOfDays = Math.ceil((this.date - today) / 8.64e7);
            if (numberOfDays > 31) {
                var numberOfMonths = numberOfDays / 30;
                if (numberOfMonths > 12) {
                    var numberOfYears = numberOfMonths / 12;
                    return numberOfYears.toFixed(0) + " years from now";
                }
                return numberOfMonths.toFixed(0) + " months from now";
            }
            return numberOfDays.toFixed(0) + " days from now";
        }
    };
    return Deight;
}());
module.exports = Deight;
console.log(new Deight('2/19/98').when('2/22/1997'));
