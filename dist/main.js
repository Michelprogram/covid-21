"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataManager = _interopRequireDefault(require("./dataManager.js"));

var _domManager = _interopRequireDefault(require("./domManager.js"));

var _graphic = _interopRequireDefault(require("./graphic.js"));

var data = new _dataManager.default();
var charts = new _graphic.default();
window.addEventListener('DOMContentLoaded', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (event) {
    var countries = yield data.getFullData();
    charts.loadChart(countries);
    var dom = new _domManager.default(countries);
    dom.initTable();
    dom.arrows.forEach((el, index) => {
      el.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
        var trie = dom.updateArrow(el, index);
        countries = yield data.order(index, trie);
        dom.updateTable(countries);
      }));
    });
    dom.button.addEventListener('click', () => {
      charts.updateCharts(countries, dom.getInputValue());
      dom.filterTable();
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());