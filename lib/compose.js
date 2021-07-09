"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = compose;

function compose() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return middlewares.reduce(function (func, middleware) {
    return function () {
      return func(middleware.apply(void 0, arguments));
    };
  });
}