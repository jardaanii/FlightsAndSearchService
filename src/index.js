const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupandStartServer = async () => {
  // create the express object
  const app = express();

  app.use(express.json());

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({
      name: "Greater Noida",
    });
  });
};

setupandStartServer();
