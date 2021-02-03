//This is the entry point of our application

const yargs = require("yargs");
const c = require("./library/chalk");

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
    console.log(argv.todo, argv.complete);
  },
});

yargs.parse(); // run the config and print out all the message nicely in our terminal

// ----------------- CHALK

c.blue("Hello World");
c.red("Hello World");
c.green("Hello World");
c.red("Hello World");
