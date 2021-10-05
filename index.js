const os = require("os")
const fs = require("fs")

//creating new file in the folder
fs.appendFile('./new folder/mynewfile1.txt', '', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//content on the newfile which is its own time stamp
fs.stat("./new folder/mynewfile1.txt", (error, stats) => {
    if (error) {
        console.log(error);
        return;
    }
    //geting the current timestamp
    var data = (stats.birthtime);
    //writing the current timestamp in to the file 
    fs.writeFile('./new folder/mynewfile1.txt', `${data}`, function (err) {
        if (err) throw err;
        console.log(data);
    });
});


const testFolder = './new folder';
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});


