const fs = require("fs");

/**
 * Copy file from source to destination
 * @param {URI} src 
 * @param {String | Buffer} data 
 * @param {Object} Optional, defaults : {encoding : 'utf8', mode : 0o666, flag : 'a'}
 * @returns {Promise} 
 */
function appendFile(path, data, options={encoding : 'utf8', mode : 0o666, flag : 'a'}) {
    return  new Promise((res, rej) => {
    fs.appendFile(path, data, options, (err) => {
      if (err) {
          rej(err)
      } else 
        res("200");
    });
  });
}

module.exports = {appendFile};


