const fs = require("fs");

// fs.writeFile("Message.txt", "Welcome to node.js", (err) => {
//     if (err) throw err;
//     console.log("saved successifully");
// });

fs.readFile("./Message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});