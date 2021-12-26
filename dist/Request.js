"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

class Request {}

(0, _defineProperty2.default)(Request, "send", function (URI, method) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    request.onreadystatechange = () => {
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
var _default = Request;
exports.default = _default;