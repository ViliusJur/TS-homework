import Vehicle from './vehicle.js';
class LandVehicle extends Vehicle {
    tires;
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.tires = tires;
    }
    toString = () => `${this.getString()}\tpandangos: ${this.tires.join(', ')}`;
}
export default LandVehicle;
//# sourceMappingURL=land-vehicle.js.map