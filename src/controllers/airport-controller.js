const { AirportService } = require("../services/index");

const airportservice = new AirportService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const airport = await airportservice.createAirport(data);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a airport",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in airport-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const airportId = req.params.id;
    const response = await airportservice.deleteAirport(airportId);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted a airport",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in airport-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const data = req.body;
    const airportId = req.params.id;
    const airport = await airportservice.updateAirport(airportId, data);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully updated the airport",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in airport-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airportId = req.params.id;
    const airport = await airportservice.getAirport(airportId);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully fetched a airport",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in airport-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
