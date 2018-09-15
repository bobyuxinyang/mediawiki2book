const getContent = require('./getContentByName')
const sleep = () => new Promise((res, rej) => setTimeout(res, 1000));

const fs = require('fs')
const utils =  {
    getContentByName: async(name) => {
        if(Array.isArray(name)) {
            for(var i = 0,len = name.length;i<len;i++) {
                await sleep()
                const r = await getContent(name[i])
                console.log(name[i])
                // console.log(r)
                fs.appendFileSync('content.mediawiki', '[[' + name[i] + ']]\nexport')
                fs.appendFileSync('content.mediawiki', r)
            }
        } else {
            return await getContent(name)
        }
    }
}


module.exports = utils