var readlineSync = require('readline-sync');
var menu = ['quit', 'show current', 'change current', 'create item', 'delete item', 'open'];
var fs = [
    [0, null, 'root'],
    [2, 0, 'file.txt', 'sdfsdf'],
    [3, 0, 'sub2'],
    [1, 0, 'sub1'],
]
var current = 0;

(function () {
    printCurrentFolder();
    while (true) {
        printMenu();
    }
})();

function printMenu() {
    var choice = readlineSync.keyInSelect(menu, 'make your choice:', { cancel: false });
    switch (choice) {
        case 0: quitProgram(); break;
        case 1: printCurrentFolder(); break;
    }
}

function printCurrentFolder() {
    var output = [];
    for (var i in fs) {
        var item = fs[i];
        if (item[0] == current) output.unshift(item[2] + '/');
        else if (item[1] == current) output.push('├──' + item[2] + (!item[3] ? '/' : ''));
    }
    output.sort(function (a, b) { return (isFolder(a) && isFolder(b) ? 0 : isFolder(a) && !isFolder(b) ? -1 : 1); });
    for (var i in output) console.log(output[i]);
}

function isFolder(folderName) {
    return folderName.lastIndexOf('/') == folderName.length - 1;
}

function quitProgram() {
    process.exit(0);
}