(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.yourModule = factory());
}(this, (function () { 'use strict';

	var Deight = /** @class */ (function () {
	    function Deight() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.date = new Date(args);
	    }
	    return Deight;
	}());

	return Deight;

})));
