"use strict";

var croissant = function croissant(countries, parameter) {
  return countries.sort(function (a, b) {
    return a[parameter] - b[parameter];
  });
};

var decroissant = function decroissant(countries, parameter) {
  return countries.sort(function (a, b) {
    return a[parameter] - b[parameter];
  }).reverse();
};

Number.prototype.splitAtThree = function () {
  return this.toString().split("").reverse().map(function (letter, index) {
    return index % 3 === 0 && index != 0 ? letter + " " : letter;
  }).reverse().join("");
};