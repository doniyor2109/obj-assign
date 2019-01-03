'use strict';

/**
 * @param obj
 *
 * Shallow clone implementation -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#Creating_a_shallow_clone
* */
function shallow(obj) {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}

/**
 * @param target
 * */
function assign(target) {
  var result = Object(target);
  var source;

  for (var i = 1; i < arguments.length; i++) {
    source = Object(arguments[i]);

    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        Object.defineProperty(result, key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      }
    }
  }

  return result;
}

module.exports = assign;