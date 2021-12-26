"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dataManager = _interopRequireDefault(require("./dataManager.js"));

var _domManager = _interopRequireDefault(require("./domManager.js"));

var data = new _dataManager.default();
window.addEventListener('DOMContentLoaded', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (event) {
    var dom = new _domManager.default(yield data.getFullData());
    dom.initTable();
    dom.arrows.forEach((el, index) => {
      el.addEventListener('click', /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
        var trie = dom.updateArrow(el, index);
        var countriesUpdateOrdered = yield data.order(index, trie);
        dom.updateTable(countriesUpdateOrdered);
      }));
    });
    dom.button.addEventListener('click', () => dom.filterTable());
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());