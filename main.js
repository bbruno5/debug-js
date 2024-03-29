/* 
- Developed by bbruno5 <bbruno5@b5team.com> at B5 Team.
- To contact us, access <https://b5team.com/> or send an e-mail. */

let DEBUG = process.env.DEBUG || false;
let COUNT = 0;

let logger = (arg) => {
    if (typeof arg !== 'undefined') console.log(arg)
    else {
        console.log(COUNT);
        COUNT++;
    }
}

function level (lvl=3, arg) {
    if (DEBUG) {
        if (arguments.length === 1) {
            arg = lvl;
            lvl = 3;
        }
        if (lvl <= parseInt(DEBUG)) logger(arg);
    }
}

module.exports.level = level;
