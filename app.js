var readlineSync = require('readline-sync');
var currentFolder = 0;
var lastId = 0;
var menu = [
    'Print current folder',
    'Change current folder',
    'Create file or folder',
    'Delete file or folder',
    'Open file',
    'Quit Program'
];
var fsStorage = [
    {
        id: 0, name: 'root',
        children: [
            {
                id: 1, name: 'sub1', children: [
                    { id: 4, name: 'file1.txt' },
                ]
            },
            { id: 2, name: 'sub2', children: [] },
            { id: 3, name: 'file1.txt' },
        ]
    }
];

(function () {
    printCurrentFolder(currentFolder);
    while (true) {
        printMenu();
    }
})();

function printMenu() {
    var answer = readlineSync.keyInSelect(menu, 'Please make your choice:');
    switch (answer) {
        case 0: printCurrentFolder(currentFolder); break;
        case 1: changeCurrentFolder(); break;
        case 2: createFileOrFolder(); break;
        case 3: deleteFileOrFolder(); break;
        case 4: openFile(); break;
        case 5: quitProgram(); break;
    }
}

function printCurrentFolder(folderId) {
    folder = getCurrentFolder(folderId);
    console.log(folder.name);
    folder.children.forEach(function (subitem) {
        console.log(' ' + subitem.name);
    });
}

function getCurrentFolder(folderId, items) {
    items = items || fsStorage;
    for (var i in items) {
        if (items[i].id == folderId) {
            return items[i];
        }
    }
    for (var i in items) {
        var folder = getCurrentFolder(folderId, items[i].children);
        if (folder) {
            return folder;
        }
    }
}

function getFolderParent(folderId, items, parent) {
    items = items || fsStorage;
    for (var i in items) {
        if (items[i].id == folderId) {
            return parent || items[i];
        }
    }
    for (var i in items) {
        var folder = getFolderParent(folderId, items[i].children, items[i]);
        if (folder) {
            return folder;
        }
    }
}

function changeCurrentFolder() {
    folderName = readlineSync.question('Enter folder name:');
    var folder = null;
    if (folderName == '..') {
        folder = getFolderParent(currentFolder);
        currentFolder = folder.id;
        printCurrentFolder(currentFolder);
    }
    else {
        folder = getCurrentFolder(currentFolder);
        for (var f in folder.children) {
            if (folder.children[f].name == folderName) {
                currentFolder = folder.children[f].id;
                printCurrentFolder(currentFolder);
                return;
            }
        }
        console.log('Folder is not exists');
    }
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
    if (answer)
        process.exit(0);
}