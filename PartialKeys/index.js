//  URL: https://www.codewars.com/kata/5e602796017122002e5bc2ed/train/javascript


// -- INSTRUCTIONS -- 
/*  Write a code that receives an array of numbers or strings, goes one by one through 
it while taking one value out, leaving one value in, taking, leaving, and back again 
to the beginning until all values are out.

It's like a circle of people who decide that every second person will leave it, until
the last person is there. So if the last element of the array is taken, the first 
element that's still there, will stay.

The code returns a new re-arranged array with the taken values by their order. The 
first value of the initial array is always taken. */


// -- EXAMPLES
/* let o = partialKeys({ abcd: 1 })

o.abcd === 1 // true
o.abc === 1 // true
o.ab === 1 // true
o.a === 1 // true

o.b === 1 // false!

Object.keys(o) // ['abcd'] */


// SOLUTION
function partialKeys (obj) {

}


// -- SAMPLE TESTS
// const { expect } = require('chai')

// describe('not random tests - { aaa: 1, abc: 2, dfg: 3, def: 4, dfgh: 5 }', () => {
//   let subject = partialKeys({
//     aaa: 1,
//     abc: 2,
//     dfg: 3,
//     def: 4,
//     dfgh: 5
//   })
  
//   it(`should return 1 for keys 'a' and 'aa'`, () => {
//     expect(subject.a).to.be.equal(1)
//     expect(subject.aa).to.be.equal(1)
//   })
  
//   it(`should return 2 for key 'ab'`, () => {
//     expect(subject.ab).to.be.equal(2)
//   })
  
//   it(`should return 3 for key 'df'`, () => {
//     expect(subject.df).to.be.equal(3)
//   })
  
//   it(`should return 4 for keys 'd' and 'de'`, () => {
//     expect(subject.d).to.be.equal(4)
//     expect(subject.de).to.be.equal(4)
//   })
  
//   it(`should only return 5 for key 'dfgh'`, () => {
//     expect(subject.dfg).to.be.equal(3)
//     expect(subject.dfgh).to.be.equal(5)
//   })
  
//   it(`should be undefined for non-matching keys (e.g. 'b', 'c', 'ef')`, () => {
//     expect(subject.b).to.be.equal(undefined)
//     expect(subject.c).to.be.equal(undefined)
//     expect(subject.ef).to.be.equal(undefined)
//   })
// })