var readlineSync = require('readline-sync');
var exit = false;
var menu = [
    'Print current folder',
    'Change current folder',
    'Create file or folder',
    'Delete file or folder',
    'Search in file or folder',
    'Quit Program'
];

main();

function main() {
    while (!exit) {
        printMenu();
    }
    process.exit(0);
}

function printMenu() {
    var answer = readlineSync.keyInSelect(menu, 'Please make your choise:');
    switch (answer) {
        case 0: printCurrentFolder(); break;
        case 1: changeCurrentFolder(); break;
        case 2: createFileOrFolder(); break;
        case 3: deleteFileOrFolder(); break;
        case 4: searchInFileOrFolder(); break;
        case 5: quitProgram(); break;
    }
}

function printCurrentFolder() {
    console.log('printing current folder');
    /* todo: implement hierarcial folder and file printing at current folder  */
}

function changeCurrentFolder() {
    console.log('changing current folder');
    /* todo: implement cli to move in all directions  */
}

function createFileOrFolder() {
    console.log('creating file folder');
    /* todo: implement additon of file/folder to file system array   */
}

function deleteFileOrFolder() {
    console.log('delete file folder');
    /* todo: implement deletion of file/folder from file system array   */
}

function searchInFileOrFolder() {
    console.log('searching current files folder');
    /* todo: implement search across all folders by name and content  */
}

function quitProgram() {
    var answer = readlineSync.keyInYNStrict('Are you sure?');
    exit = answer ? true : false;
}