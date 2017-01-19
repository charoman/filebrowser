var readlineSync = require('readline-sync');
var answer = readlineSync.question('Your name: ');
readlineSync.keyInSelect(['menu 1','menu 2','menu 3'],'question');
console.log(answer);
process.exit(0);
