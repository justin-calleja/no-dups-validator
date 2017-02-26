/**
 * @module @justinc/no-dups-validator
 */

const extractDuplicates = require('@justinc/extract-duplicates')

/**
 * This function is curried.
 * @param  {Iterable} [iterable=[]] - The iterable whose elements are checked for duplicates
 * @param  {String} errMsgPrefix - A string to prefix any found duplicates in the error message
 * @return {Tuple<Boolean, Array<Error>>}
 * @see {@link module:@justinc/jsdocs.Tuple}
 * @tutorial curry
 */
function noDups (iterable = []) {
  return errMsgPrefix => {
    const dups = extractDuplicates(iterable)
    return dups.size === 0
      ? [ true, [] ]
      : [ false, [ new Error(`${errMsgPrefix || ''}${Array.from(dups).join(', ')}`) ] ]
  }
}

module.exports = noDups
