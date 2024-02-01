const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data) {
    try {
      const airport = await this.airportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log(
        "Something is wrong in services directory in city-service.js"
      );
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const airport = await this.airportRepository.deleteAirport(airportId);
      return airport;
    } catch (error) {
      console.log(
        "Something is wrong in services directory in city-service.js"
      );
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airport = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return airport;
    } catch (error) {
      console.log(
        "Something is wrong in services directory in city-service.js"
      );
      throw { error };
    }
  }

  async getAirport(data) {
    try {
      const airport = await this.airportRepository.getAirport(data);
      return airport;
    } catch (error) {
      console.log(
        "Something is wrong in services directory in city-service.js"
      );
      throw { error };
    }
  }
}

module.exports = AirportService;
