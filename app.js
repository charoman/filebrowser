/*
==== Print current folder example ===
output:
root
    subfolder1
    file1
    file2

==== Change folder example ===
input: Change folder to: [ ".." - goes to parent | folder-name ]
output: 
current-folder
    file1
    file2

==== Create file folder example ===
input: Type file/folder name: [ name ]
input: Write your content: [ content | empty - if empty creates folder else file ]

output if folder:
current-folder
    the-new-folder

output if file:
current-folder
    the-new-file

==== Delete file folder example ===
input: Type file/folder name: [ name ]
input: Are you sure?
output: Done Message

==== Open file ====
input: Type file name: [ name ]
output: 
** The File Content **
*/

var readlineSync = require('readline-sync');
var exit = false;
var menu = [
    'Print current folder',
    'Change current folder',
    'Create file or folder',
    'Delete file or folder',
    'Open file',
    'Quit Program'
];

/* this will be the storage for our file system */
var fsStorage = [
    /* [id, parentId, name, content==null] */
    [0, 0, 'root'],
    [1, 0, 'subfolder1'],
    [2, 0, 'subfolder2'],
    [3, 0, 'subfolder3'],
    [4, 1, 'subfolder4'],
    [5, 4, 'subfolder5'],
    [6, 5, 'file1', 'content'],
    [7, 5, 'file2', 'content']
];

var currentFolder = 0;

main();

function main() {
    while (!exit) {
        printMenu();
    }
    process.exit(0);
}

function printMenu() {
    var answer = readlineSync.keyInSelect(menu, 'Please make your choice:');
    switch (answer) {
        case 0: printCurrentFolder(); break;
        case 1: changeCurrentFolder(); break;
        case 2: createFileOrFolder(); break;
        case 3: deleteFileOrFolder(); break;
        case 4: openFile(); break;
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

function openFile() {
    console.log('opening file');
    /* todo: implement search across all folders by name and content  */
}

function quitProgram() {
    var answer = readlineSync.keyInYNStrict('Are you sure?');
    exit = answer ? true : false;
}