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
    return Deight;
}());
module.exports = Deight;
// const date = new Deight('2/19/98')
// date.year
