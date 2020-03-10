const fs = require("fs");
const EventEmitter = require("events");
const fileEvents = new EventEmitter();

const name = process.argv[2];

console.log("Writing the file");

// for (let i = 0; i < 10; i++) {
//   fs.writeFile("./name.txt", name, e => console.log("Wrote file"));
// }

const showFileContent = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
};

// const nameInFile = fs.readFile("./name.txt", "utf-8", showFileContent);
// fs.readFile("./name.txt", "utf-8", (err, data) => {
//   console.log("File read complete");
//   showFileContent(err, data);
// });
fs.readFile("./name.txt", "utf-8", (err, data) => {
  fileEvents.emit("fileRead");
  fileEvents.emit("Ready!");
  showFileContent(err, data);
});

fileEvents.on("fileRead", () => console.log("file read complete"));

fileEvents.on("fileRead", () => console.log("file read complete 2"));
