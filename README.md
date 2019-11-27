# debug-js
Simple debugger library for nodeJS

- Install module:<br>
`npm install https://github.com/bbruno5/debug-js.git`<br><br>
- Import module:<br>
`const debug = require('debug-js');`
- Usage:<br>
`debug.level(lvl, var);`<br><br>
`lvl` must be a number between 0 and 3. Defaults to 3.<br>
`var` must be the thing you want to print when debugging. A script, a text, etc.<br><br>
If you call `debug.level()` without arg, it will print a number in crescent order, until your script stop. Only works if debug level is set to 3.<br><br>
- Calling debug on script time execution:<br>
You must define DEBUG environment variable before call your script, defining a value between 0 and 3. Not defining it, means that its value will be false, and will take no effect.<br><br>
`DEBUG=0|1|2|3 node ./yourcode.js yourargs`<br><br>
DEBUG = 3 => prints all debug lines, from levels 0 to 3<br>
DEBUG = 2 => prints debug lines from levels 0 to 2<br>
DEBUG = 1 => prints debug lines from levels 0 to 1<br>
DEBUG = 0 => prints only debug lines from level 0<br>
DEBUG = false => turn off debug-js
