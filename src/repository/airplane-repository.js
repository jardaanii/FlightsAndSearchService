const { Airplane } = require("../models/index");

class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data);
      return airplane;
    } catch (error) {
      console.log("Something is wrong in the airplane-repository.js");
      throw { error };
    }
  }

  async getAirplane(id) {
    try {
      const airplane = await Airplane.findByPk(id);
      return airplane;
    } catch (error) {
      console.log("Something is wrong in the airplane-repository.js");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
