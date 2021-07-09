"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createStore;

function createStore(reducer, enhancer) {
  if (enhancer) {
    var newCreateStore = enhancer(createStore);
    var newStore = newCreateStore(reducer);
    return newStore;
  }

  var state = reducer(undefined, {
    type: ''
  });
  var listeners = [];

  var dispatch = function dispatch(action) {
    state = reducer(state, action);

    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
  };

  var getState = function getState() {
    return state;
  };

  return {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState
  };
}