
/**
 * Module exports.
 */

module.exports = function global () {
  return getGlobal();
};

/**
 * Returns `this`. Execute this without a "context" (i.e. without it being
 * attached to an object of the left-hand side), and `this` points to the
 * "global" scope of the current JS execution.
 */

function getGlobal () {
  return this;
}
