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
    return Deight;
}());
// const date = new Deight('2/19/98')
// date.year
module.exports = Deight;
