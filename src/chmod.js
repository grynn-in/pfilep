const fs = require("fs");

/**
 * Copy file from source to destination
 * @param {String} Path to file
 * @param {Integer} Mode
 * @returns {Promise} 
 */

 
 function chmod(path, mode) {
    return new Promise ((res, rej)=> {
        fs.access (path, mode, (err) => {
            if (err) {
                rej ("error occured"  + err)
            } else 
                res(true);
        })
    })
 }

 module.exports = {chmod};