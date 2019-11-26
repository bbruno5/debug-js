/* 
- Developed by bbruno5 <bbruno5@b5team.com> at B5 Team.
- To contact us, access <https://b5team.com/> or send an e-mail. */

let DEBUG = process.env.DEBUG || false;
let COUNT = 0;

exports.debug = (arg) => {
    if (DEBUG) {
        if (typeof arg !== 'undefined') console.log(arg)
        else {
            console.log(COUNT);
            COUNT++;
        }
    }
}
