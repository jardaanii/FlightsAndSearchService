const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes")
const flightService = new FlightService();

const create = async (req, res) => {
  try {

    const flightRequestData = {
      fightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created the flight",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in flight-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const data = req.query;
    const flight = await flightService.getAllFlights(data);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfully fetched the flights",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in flight-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
