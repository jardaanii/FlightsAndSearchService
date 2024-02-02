const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const city = await cityService.createCity(data);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

const createBulk = async (req, res) => {
  try {
    const data = req.body;
    const cities = await cityService.createCities(data);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully created a cities",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a cities",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const cityId = req.params.id;
    const response = await cityService.deleteCity(cityId);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted the city",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const cityID = req.params.id;
    const city = await cityService.getCity(cityID);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched the city",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const data = req.body;
    const cityId = req.params.id;
    const city = await cityService.updateCity(cityId, data);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    // console.log(req.params);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched all the cities",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to All get the cities",
      err: error,
    });
  }
};

const getAllAirports = async (req, res) => {
  try {
    const cityAirports = await cityService.getAllCityAirports(req.query);

    return res.status(200).json({
      data: cityAirports,
      success: true,
      message: "Successfully fetched all the cities",
      err: {},
    });
  } catch (error) {
    console.log(
      "Something is wrong in controllers directory in city-controller.js"
    );
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch Airports",
      err: error,
    });
  }
};

module.exports = {
  create,
  createBulk,
  destroy,
  get,
  update,
  getAll,
  getAllAirports,
};
