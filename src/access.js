const fs = require("fs");

/**
 * Copy file from source to destination
 * @param {string} src 
 * @param {String | Mode} default : fs.constants.F_OK 
 * @returns {Promise} 
 */

 function access(path, mode=fs.constants.F_OK) {
    return new Promise ((res, rej)=> {
        fs.access (path, mode, (err) => {
            if (err) {
                rej ("error occured"  + err)
            } else 
                res(true);
        })
    })
 }

 module.exports = {access};