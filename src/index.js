const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupandStartServer = async () => {
  // create the express object
  const app = express();

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
};

setupandStartServer();
