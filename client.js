const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on("end", () => {
    console.log("disconnected from server");
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NMA");
  });
  return conn;
};

module.exports = { connect };
