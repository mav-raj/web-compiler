const app = require("express")();
const bodyParser = require("body-parser");
const { c, cpp, node, python, java } = require("compile-run");
const {
  compileC,
  compileCpp,
  compileJava,
  compileNode,
  compilePython
} = require("./compile");
const PORT = process.env.PORT || 1200;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json());

app.get("/compiler", (req, res) => {
  res.render("compiler", {
    path: "/compiler"
  });
});

app.post("/compiler/compile", async (req, res) => {
  const body = req.body;
  // console.log(body);
  const lang = body.lang;
  const code = body.code;
  let input = body.input;
  input = input.trim();
  let len = input.length;
  var result = {};
  switch (lang) {
    case "c":
      // result = compileC(code, input);
      c.runSource(code, len > 0 ? { stdin: input } : null)
        .then(result => {
          // console.log(result);
          res.status(200).json(result);
        })
        .catch(err => {
          res.send(err);
        });
      break;
    // case "c":
    //   result = await compileC(code, input);
    //   await console.log(result);
    //   await res.send(result);
    //   break;
    case "cpp":
      // result = compileCpp(code, input);
      cpp
        .runSource(code, len > 0 ? { stdin: input } : null)
        .then(result => {
          // console.log(result);
          res.status(200).json(result);
        })
        .catch(err => {
          res.send(err);
        });
      break;
    case "java":
      java
        .runSource(code, len > 0 ? { stdin: input } : null)
        .then(result => {
          console.log(result);
          res.status(200).json(result);
        })
        .catch(err => {
          res.send(err);
        });
      break;
    case "node":
      // result = compileNode(code, input);
      node
        .runSource(code, len > 0 ? { stdin: input } : null)
        .then(result => {
          // console.log(result);
          res.status(200).json(result);
        })
        .catch(err => {
          res.send(err);
        });
      break;
    case "python":
      // result = compilePython(code, input);
      python
        .runSource(code, len > 0 ? { stdin: input } : null)
        .then(result => {
          // console.log(result);
          res.status(200).json(result);
        })
        .catch(err => {
          res.send(err);
        });
      break;
    default:
      result = compileC(code, input);
  }
});

app.get("/", (req, res) =>
  res.send(
    `<div style="width:100%; margin:auto;"><h1>Welcome to online compiler</h1></div>`
  )
);

app.listen(PORT, () => console.log("COMPILER SERVER IS UP, PORT: ", PORT));
