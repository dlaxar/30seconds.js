/*

This library includes a few functions, I've found myself implementing over
and over again in various projects - client side as well as server side JS.
The only limitation for a function to get into this collection is, that
the time it takes to implement it is no longer than 30 seconds.

Licence: MIT licence (http://opensource.org/licenses/MIT)

Original Author: @dlaxar

*/

//-- Array

Array.prototype.each = function(callback) {
	for(var k in this) {
		callback.call(this, this[k])
	}
	return this;
};

Array.prototype.contains = function(obj) {
	for(var k in this) {
		if(this[k] == obj) return true;
	}
	return false;
};

Array.prototype.indexOf = function(obj) {
	for(var k in this) {
		if(this[k] == obj) return k;
	}
	return -1;
};

Array.prototype.merge = function(array) {
	for(var k in array) {
		this[k] = array[k]
	}
	return this;
};

Array.prototype.isArray = function(obj) {
	return Object.prototype.toString.call([]) === Object.prototype.toString.call(obj);
};

//-- String

String.prototype.beginsWith = function(string) {
	return this.substring(0, string.length) === string;
};

String.prototype.endsWith = function(string) {
	return this.indexOf(string, this.length - string.length) !== -1;
};

if(!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}

String.prototype.int = function() {
	return parseInt(this);
};