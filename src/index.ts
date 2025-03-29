import * as fs from "node:fs";

let currDir = process.cwd();
let files =  fs.readdirSync(currDir);
files.forEach(f => console.log(f));