const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, cityId }) {
    try {
      const airport = await Airport.create({ name, cityId });
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteAirport(AirportId) {
    try {
      await Airport.destroy({
        where: {
          id: AirportId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async updateAirport(airportId, data) {
    try {
      const airport = await Airport.findByPk(airportId);
      if (data.name) {
        airport.name = data.name;
      }
      if (data.cityId) {
        airport.cityId = data.cityId;
      }
      await airport.save();
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async getAirport(airportId) {
    try {
      const airport = await Airport.findOne({
        where: {
          id: airportId,
        },
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
