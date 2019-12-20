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

const frontendStarterToolkitPackacgeVersion = JSON.parse(
  fs.readFileSync('package.json', 'utf8')
).version;

const packageJson = {
  name: folderName,
  version: '0.0.1',
  scripts: {
    start: 'frontend-starter-toolkit start',
    build: 'frontend-starter-toolkit build',
    test: 'frontend-starter-toolkit test',
    eject: 'frontend-starter-toolkit eject',
  },
  dependencies: {
    'frontend-starter-toolkit': frontendStarterToolkitPackacgeVersion,
  },
  license: 'MIT',
};
