test(`should resolve`, () => {
  return pickApple('ripe')
    .then(result => {
      expect(result).toBe('ripe apple')
    }, error => {
      throw new Error('this should not run')
    })
    .catch(error => {
      throw new Error('this should not run')
    })
})

test(`should reject`, () => {
  return pickApple('unripe')
    .then(result => {
      throw new Error('this should not run')
    }, error => {
      expect(error).toBe('unripe apple')
    })
    .catch(error => {
      throw new Error('this should not run')
    })
})

test(`errors can be caught`, () => {
  return pickApple()
    .then(result => {
      throw new Error('assert or throw here')
    })
    .catch(error => {
      expect(error.message).toBe('out of apples')
    })
})

function pickApple(ripeness) {
  // Immediately return a promise which will eventually get resolved
  // or rejected by calling the corresponding function.
  return new Promise((resolve, reject) => {
    // Do something asynchronous. Could be AJAX, using a timeout here.
    setTimeout(() => {
      if (ripeness === 'ripe') {
        resolve('ripe apple')
      } else if (ripeness === 'unripe') {
        reject('unripe apple')
      } else {
        reject(new Error('out of apples'))
      }
    })
  })
}

//////// Elaboration /////////
// Please write, in your own words
// a few of the core concepts from
// the feature(s) in this exercise
//
// 1.
// 2.
// 3.
////////////////////////////////
//
/////////// Feedback ///////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Promises&em=
*/
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests, then file a pull request to add them to the extra credit!
// Learn more here: https://github.com/kentcdodds/es6-workshop/blob/master/CONTRIBUTING.md#development
