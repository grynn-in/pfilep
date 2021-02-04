const {appendFile} = require("./appendFile");


appendFile ("./src/test.txt", "   1abcd")
 .then ((msg) => console.log(msg))
 .catch ((err) => console.log (err))





