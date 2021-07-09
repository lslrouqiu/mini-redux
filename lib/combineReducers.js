"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = combineReducers;

function combineReducers(arg) {
  var keys = Object.keys(arg);
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var nextState = {};

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var reducer = arg[key];
      var keyState = reducer(state[key], action);
      nextState[keys[i]] = keyState;
    }

    return nextState;
  };
}