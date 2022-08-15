import Vehicle from './vehicle.js';

class AirVehicle extends Vehicle {
  maxAltitude;

  constructor({ maxAltitude }, vehicleProps) {
    super(vehicleProps);
    this.maxAltitude = maxAltitude;
  }

  toString = () => `${this.getString()}\tmaksimalus aukštis: ${this.maxAltitude}`;
}
export default AirVehicle;
// # sourceMappingURL=air%20-%20vehicle.js.map
