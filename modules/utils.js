const fs = require("fs");
const c = require("./modules/chalk");

const loadTodos = () => {
  try {
    // read the file data.json in root directory and assign it to dataBuffer
    // dataBuffer will contain binary data reading from the file
    const dataBuffer = fs.readFileSync("../data.json");
    // convert binary data to string (json object)
    const dataJSON = dataBuffer.toString();
    //parsing a json object to js object so we can work with
    return JSON.parse(dataJSON);
  } catch (e) {
    // Handle erro, if cannot file the file 'data.json' or something wrong duting the process, we still return an empty array
    console.log(e);
    return [];
  }
};

const listTodos = () => {
  const todos = loadTodos();
  c.green("Listing all todos");
  c.black("============================");
  todos.map((e) => {
    c.black("|| ID: ", e.id);
    c.blue("|| TODO: ", e.todo);
    c.black("|| COMPLETE: ", e.complete);
    c.black("============================");
  });
};

// //for demonstrating purpose, you should delete it
// const todos = loadTodos();
// console.log(todos);

// const saveTodos = (arr) => {
//   // convert js object to json object (string)
//   const dataJSON = JSON.stringify(arr);
//   // use fs.writeFileSync to write dataJSON to data.json file
//   fs.writeFileSync("../data.json", dataJSON);
// };

// const newData = [{ id: 1, todo: "Change the file back to its original state" }];
// saveTodos(newData);

module.exports = {
  listTodos, //export more constants by addig them here, separated by commas
};
