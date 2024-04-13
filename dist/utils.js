"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decroissant = exports.croissant = void 0;

var croissant = (countries, parameter) => countries.sort((a, b) => a[parameter] - b[parameter]);

exports.croissant = croissant;

var decroissant = (countries, parameter) => countries.sort((a, b) => a[parameter] - b[parameter]).reverse();

exports.decroissant = decroissant;

Number.prototype.splitAtThree = function () {
  return this.toString().split("").reverse().map((letter, index) => index % 3 === 0 && index != 0 ? letter + " " : letter).reverse().join("");
};