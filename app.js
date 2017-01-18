var readlineSync = require('readline-sync');
var exit = false;
while (!exit) {
    clearScreen();
    var menu = [
        'Print current folder',
        'Change current folder',
        'Create file or folder',
        'Delete file or folder',
        'Search in file or folder',
        'Quit Program'
    ];
    var answer = readlineSync.keyInSelect(menu, 'Please make your choise:');
    switch (answer) {
        case 0: printCurrentFolder(); break;
        case 1: changeCurrentFolder(); break;
        case 2: createFileOrFolder(); break;
        case 3: deleteFileOrFolder(); break;
        case 4: searchInFileOrFolder(); break;
        case 5: quitProgram(); break;
    }

    function clearScreen() { /*console.log('\x1Bc');*/ }
    function printCurrentFolder() { }
    function changeCurrentFolder() { }
    function createFileOrFolder() { }
    function deleteFileOrFolder() { }
    function searchInFileOrFolder() { }
    function quitProgram() {
        var answer = readlineSync.keyInYNStrict('Are you sure?');
        exit = answer ? true : false;
    }
}
process.exit(0);