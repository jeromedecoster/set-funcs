const fn = require('../set-string')
const test = require('tape')

test('set-string regular', function (t) {

  // special case...
  // should be good, but nobody creates new String('abc')
  // so, ignored to speed up the function
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String(' ')
  t.equal(fn(s1), '')
  t.equal(fn(s2), '')
  t.equal(fn(s3), '')
  // ...end of special case

  t.equal(fn('abc'), 'abc')
  t.equal(fn(''),    '')
  t.equal(fn(' '),   ' ')
  t.end()
})

test('set-string fallback', function (t) {

  // special case...
  // should be good, but nobody creates new String('abc')
  // so, ignored to speed up the function
  var s1 = new String('abc')
  var s2 = new String('')
  var s3 = new String(' ')
  t.equal(fn(1, s1), '')
  t.equal(fn(1, s2), '')
  t.equal(fn(1, s3), '')
  // ...end of special case

  t.equal(fn(),             '')
  // t.equal(fn(1, null),      null)
  t.equal(fn(1, undefined), '')
  t.equal(fn(1, 'abc'),     'abc')
  t.end()
})

test('set-string allowed', function (t) {

  // special case...
  // should be good, but nobody creates new String('abc')
  // so, ignored to speed up the function
  var s1 = new String('no')
  var s2 = new String('err')
  t.equal(fn(s1,    '', ['yes', 'no']), '')
  t.equal(fn(s1,    '', ['yes', s1]),   '')
  t.equal(fn('why', s2, ['yes', 'no']), '')
  // ...end of special case

  t.equal(fn('abc', null,      ['yes', 'no']), '')
  t.equal(fn('abc', '',        ['yes', 'no']), '')
  t.equal(fn('yes', '',        ['yes', 'no']), 'yes')
  t.equal(fn('no',  '',        ['yes', 'no']), 'no')
  t.equal(fn('why', undefined, ['yes', 'no']), '')

  t.equal(fn('abc', '',        'yes no'),      '')
  t.equal(fn('no',  '',        'yes no'),      'no')
  t.equal(fn('no',  '',        '  yes   no '), 'no')

  t.end()
})
