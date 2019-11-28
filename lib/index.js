const fs = require('fs');

function mdLinks(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err,data) => {
            if (err) {
                reject('file is not found')
            } else {
                const str = data.toString()
                const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
                let m;
                let arr = [];
                while ((m = regex.exec(str)) !== null) {
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }                    
                    arr.push({href: m[2], text: m[1]});
                }
                resolve(arr);
            }
        })
    })
}

module.exports = mdLinks