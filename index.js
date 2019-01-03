'use strict';

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