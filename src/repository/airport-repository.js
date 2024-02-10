const CurdRepository = require("./curd-repository")
const { Airport } = require("../models/index");
class AirportRepository extends CurdRepository {
  constructor() {
    super(Airport);
  }

}

module.exports = AirportRepository;
