"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Request = /*#__PURE__*/(0, _createClass2["default"])(function Request() {
  (0, _classCallCheck2["default"])(this, Request);
});
(0, _defineProperty2["default"])(Request, "send", function (URI, method) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        data = JSON.parse(request.responseText);
        resolve(data);
      }
    };

    request.open(method, URI);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    method == "POST" ? request.send(JSON.stringify(data)) : request.send();
  });
});