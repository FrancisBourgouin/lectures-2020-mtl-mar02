const fs = require("fs");

const name = process.argv[2];

console.log("Writing the file");

for (let i = 0; i < 10; i++) {
  fs.writeFileSync("./name.txt", name);
}

const nameInFile = fs.readFileSync("./name.txt", "utf-8");
console.log("File read:", nameInFile);
console.log("Wrote the file");
