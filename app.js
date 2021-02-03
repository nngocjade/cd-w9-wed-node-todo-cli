//This is the entry point of our application

const yargs = require("yargs");

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

yargs.parse(); // run the config and print out all the message nicely in our terminal
