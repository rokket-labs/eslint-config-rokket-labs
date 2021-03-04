/**
 * Function description.
 *
 * @param {*} arg The argument.
 *
 * @returns {Number} The result.
 */
function myFunction(arg) {
  const aConst = 'value'
  const another = 'value'

  console.log(aConst, another)

  if (another) return 1

  for (const a of []) {
    console.log('block', a)
    console.log('end')
  }

  if (arg === 6) {
    console.error('Argument is 6')

    try {
      throw new Error('Argument is 6')
    } catch (err) {
      console.error(err)
    }
  }

  // Some comment
  {
    const wer = 'wer'

    console.log(wer)
  }

  return 3 // Yeah
}

function anotherFunction(arg) {
  console.log(arg)
}

class MyClass {}

module.exports.myFunction = myFunction
module.exports.anotherFunction = anotherFunction
module.exports.MyClass = MyClass
