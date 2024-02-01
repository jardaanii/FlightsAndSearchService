const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");
const router = express.Router();

//City routes
router.post("/city", CityController.create);
router.post("/cities", CityController.createBulk);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.get("/cityAirports", CityController.getAllAirports);
/////////////////////////////////////////////////////////////////////
//Airport routes
router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.patch("/airport/:id", AirportController.update);
router.get("/airport/:id", AirportController.get);

module.exports = router;
