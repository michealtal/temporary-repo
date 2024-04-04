// Modules - Encapsulated code (only share minimum)
// CommonJs, every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
  require('./7-mind-grenade')
  
sayHi("Micheal")
sayHi(names.john)
sayHi(names.peter)

// note: most of the thing in puted here are gotten from other modules 4-7