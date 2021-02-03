//This is the entry point of our application

console.log("Hello World from Node");
console.log(process.argv);

if (process.argv[2] === "add") {
  console.log("adding todos");
} else if (process.argv[2] === "remove") {
  console.log("removing todos");
} else {
  console.log("I dont understand your command");
}

// run tese commands in your terminal:
// node app.js
// node app.js add
