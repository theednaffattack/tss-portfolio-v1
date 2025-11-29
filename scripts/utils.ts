import fs from "fs";
import path from "path";
import { cwd } from "process";

function rename(filename: string) {
  fs.rename(filename, filename + "x", function (err) {
    if (err) console.log("ERROR: " + err);
  });
}

function fromDir(startPath: string, filter: string) {
  //console.log('Starting from dir '+startPath+'/');
  const matchingFiles: string[] = [];

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter); //recurse
    } else if (filename.endsWith(filter)) {
      matchingFiles.push(filename);
      console.log("-- found: ", filename);
    }
  }
  return matchingFiles;
}

console.log("WHERE ARE WE", cwd());

// first run fromDir and return the array
const foundMdFiles = fromDir("./src/posts", ".md");

if (foundMdFiles) {
  for (const file of foundMdFiles) {
    rename(file);
  }
}
