// for testing constants
const fs = require('fs');

const {appendFile} = require("./appendFile");
const {access} = require("./access");
const {chmod} = require("./chmod");


// appendFile ("./src/test.txt", "   1abcd")
//  .then ((msg) => console.log(msg))
//  .catch ((err) => console.log (err))


// access ("./test.txt", fs.constants.W_OK)
// .then ((msg) => console.log(msg))
//  .catch ((err) => console.log (err))

 chmod ("./test.txt", 0o765)
.then ((msg) => console.log(msg))
 .catch ((err) => console.log (err))

 access ("./test.txt", fs.constants.W_OK)
.then ((msg) => console.log(msg))
 .catch ((err) => console.log (err))
