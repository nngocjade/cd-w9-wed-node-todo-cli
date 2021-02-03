//This is the entry point of our application
const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
const c = require("./modules/chalk");

console.log("Hello World from Node");
console.log(process.argv);

yargs.command({
  command: "add",
  describe: "Add a new todo",
  builder: {
    todo: {
      describe: "Todo content",
      demandOption: true,
      type: "string",
    },
    complete: {
      describe: "Todo status",
      demandOption: false,
      type: "boolean",
      default: false,
    },
  },

  handler: function (argv) {
    const first = c.blue("received todo");
    const second = argv.complete ? c.green(argv.todo) : c.red(argv.todo);
    console.log(`${first} / ${second}`);
    console.log(
      c.green(
        `Received: TODO of ${argv.todo}, is it complete? ${argv.complete}`
      )
    );
  },
});

// --------- READ FILE
yargs.command({
  command: "testWrite",
  handler: function (argv) {
    let todos = [
      { id: 1, task: "write application", complete: false },
      { id: 2, task: "walk the dog", complete: true },
    ];
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    console.log(c.redBright("wrote file"));
  },
});

//  ----------- WRITE FILE
yargs.command({
  command: "list",
  handler: function (argv) {
    const file = fs.readFileSync("todos.json");
    const data = JSON.parse(file);
    const tasks = data.map((t) => {
      if (t.complete === false) {
        return c.red(t.task);
      } else {
        return c.green(t.task);
      }
    });
    console.log(tasks.join(", "));
    // tasks.forEach((item) => console.log(item));
  },
});

yargs.parse(); // run the config and print out all the message nicely in our terminal
