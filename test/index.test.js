import test from 'ava'
import noDups from '..'

test('Should give [ true, [] ] when there are no duplicates', t => {
  t.deepEqual(noDups([1, 2, 3])(), [ true, [] ])
})

test('Should give [ true, [] ] when given []', t => {
  t.deepEqual(noDups([])(), [ true, [] ])
})

test('Should give [ true, [] ] when not given an iterable', t => {
  t.deepEqual(noDups()(), [ true, [] ])
})

test('Should work with iterables not just arrays', t => {
  const iterable = {}
  iterable[Symbol.iterator] = function* () {
    yield 1
    yield 2
  }
  t.deepEqual(noDups(iterable)(), [ true, [] ])
})

test('Should give [ false, [errors] ] when duplicates exist in given iterable', t => {
  const validation = noDups([1, 2, 3, 2])()
  t.false(validation[0])
  t.is(validation[1].length, 1)
  t.true(typeof validation[1][0].message === 'string')
  t.true(validation[1][0].message.endsWith('2'))
})

test('Should prefix the Error message with the given prefix when duplicates exist', t => {
  const prefix = 'Found the following duplicates:'
  const validation = noDups([1, 2, 3, 2])(prefix)
  t.false(validation[0])
  t.is(validation[1].length, 1)
  t.true(validation[1][0].message.startsWith(prefix))
  t.true(validation[1][0].message.endsWith('2'))
})
