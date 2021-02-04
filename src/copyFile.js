const fs = require("fs");

/**
 * Copy file from source to destination
 * @param {URI} src 
 * @param {URI} dest 
 * @param {Number} mode, default = 0
 * @returns {Promise} 
 */
function copyFile(src, dest, mode=0) {
    return  new Promise((res, rej) => {
    fs.copyFile(src, dest, mode, (err) => {
      if (err) {
          rej(err)
      } else 
        res("200");
    });
  });
}

module.exports = {copyFile};
