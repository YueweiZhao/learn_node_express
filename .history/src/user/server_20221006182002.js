var express = require("express");
const multipart = require("connect-multiparty");
var fs = require("fs");

var app = express();
const multipartyMiddleware = multipart();

app.get("/listUsers", function (req, res) {
  console.log("req.params: ", req.params);
  console.log("req.query: ", req.query);
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    res.end(data);
  });
});

app.post("/postUsers", multipartyMiddleware, function (req, res) {
  console.log("req.params: ", req.params);
  console.log("req.query: ", req.query);
  console.log("req.body: ", req.body);
  console.log("req.Content-Type: ", req.get("Content-Type"));
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    res.end(data);
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://localhost:%s", port);
});
