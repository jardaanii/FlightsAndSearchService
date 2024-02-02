const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than Departure time" };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something is wrong in flight-service.js");
      throw { error };
    }
  }

  async getAllFlights(data) {
    try {
      const flight = await this.flightRepository.getAllFlights(data);
      return flight;
    } catch (error) {
      console.log(
        "Something is wrong in getFlight function of flight-service.js"
      );
      throw { error };
    }
  }
}

module.exports = FlightService;
