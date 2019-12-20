#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
var child_process = require('child_process');

let folderName = process.argv[2];
if (folderName) {
  folderName = folderName.toString();
} else {
  console.log(
    'Please specify a directory name to install frontend starter toolkit in'
  );
  process.exit(1);
}
fs.ensureDirSync(folderName);
