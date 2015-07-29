#!/usr/bin/env node

// parsing is slow and blocking right now
// so we do it in a separate process
var fs = require('fs'),
    parser = require('./parser/pbxproj'),
    path = process.argv[2],
    fileContents, obj;

try {
    fileContents = fs.readFileSync(path, 'utf-8'),
    obj = parser.parse(fileContents);
    console.log(JSON.stringify(obj));
    process.exit();
} catch (e) {
    // process.send(e)
    console.error(e);
    process.exit(1);
}
